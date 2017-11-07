# Import statements bring blocks of code into our script.
# These modules can be from Python's built-in library...
import csv
import time
# ... or from code written by other Python users
# The syntax here is a little different, but the effect is the same.
# See: https://docs.python.org/3/reference/import.html
from censusgeocode import CensusGeocode

# This dictionary will map the counties in the input file to human-readable borough names
# Knowing which values to put here required looking at the input files carefully
counties = {
    'BX': 'Bronx',
    'Q': 'Queens',
    'NY': 'New York',
    'K': 'Brooklyn',
    'R': 'Staten Island'
}

# Create a new CensusGeocode object
# See the docs here: https://github.com/fitnr/censusgeocode
cg = CensusGeocode()

# define the input and output file names
infile = 'citations.csv'
outfile = 'new-citations.csv'

# Open the input file for reading
with open(infile) as f:
    # The DictReader will return every row of the CSV as a dictionary
    reader = csv.DictReader(f)

    # Open up the output file for writing. This is delete the contents, if any.
    with open(outfile, 'w') as g:
        # The DictWriter will write a dictionary, but we must tell it the names of the output fields
        # We add three new fields to reader.fieldnames (a list) using list add operator (+)
        newfieldnames = reader.fieldnames + ["address", "latitude", "longitude"]
        writer = csv.DictWriter(g, fieldnames=newfieldnames)

        # We have to explicitly write the CSV's header row
        writer.writeheader()

        # Loop through the rows in the input CSV
        for row in reader:
            # define shorthand variables for some key elements of the input dataset.
            # Knowing which values to put here required looking at the input files carefully.
            house = row['house_number']
            street = row['street_name']

            # Use the dict.get function to define a default if the county field isn't in the counties dictionary
            # (e.g. it's an string '') https://docs.python.org/3.6/library/stdtypes.html#dict.get
            county = counties.get(row['violation_county'], 'New York City')

            # Join together the fields to create an address
            row['address'] = house + ' ' + street + ', ' + county + ' NY'

            # "try" to geocode the address.
            # This may result in an error, in which case the code in the "except" block will be executed
            # We could check that the geocoding worked, but EAFP
            # https://en.wikipedia.org/wiki/Python_syntax_and_semantics#Exceptions
            try:
                locations = cg.onelineaddress(row['address'], returntype='locations')
                row["latitude"] = locations[0]['coordinates']['x']
                row["longitude"] = locations[0]['coordinates']['y']
            except:
                row["latitude"] = None
                row["longitude"] = None

            # We've now added three fields to our input row, so write it to the output file
            writer.writerow(row)

            # Wait a tenth of a second to let the Census's servers cool down
            time.sleep(0.1)
