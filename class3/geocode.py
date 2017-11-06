import csv
from censusgeocode import CensusGeocode
import time

counties = {
    'BX': 'Bronx',
    'Q': 'Queens',
    'NY': 'New York',
    'K': 'Brooklyn',
    'R': 'Staten Island'
}

cg = CensusGeocode()

with open('citations.csv') as f:
    reader = csv.DictReader(f)

    with open('new-citations.csv', 'a') as g:
        newfieldnames = reader.fieldnames + ["address", "latitude", "longitude"]
        writer = csv.DictWriter(g, fieldnames=newfieldnames)
        writer.writeheader()

        for row in reader:
            house = row['house_number']
            street = row['street_name']
            county = row['violation_county']

            address = '{} {}, {} NY'.format(house, street, counties.get(county, 'New York City'))

            try:
                locations = cg.onelineaddress(address, returntype='locations')
                lng = locations[0]['coordinates']['x']
                lat = locations[0]['coordinates']['y']
            except:
                lng = None
                lat = None

            row['address'] = address
            row["latitude"] = lat
            row["longitude"] = lng

            writer.writerow(row)
            time.sleep(0.001)
