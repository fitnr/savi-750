from bs4 import BeautifulSoup
import csv
import sys


def process_div(div):
    try:
        title = div.find(class_='views-field-title')
        name = title.find(class_='field-content').text.encode('utf8')
        d = {
            'street': div.find(class_='thoroughfare').text.encode('utf8'),
            'name': name,
            'city': div.find(class_='locality').text.encode('utf8'),
            'state': div.find(class_='state').text.encode('utf8'),
            'zipcode': div.find(class_='postal-code').text.encode('utf8'),
            'country': div.find(class_='country').text,
        }
    except AttributeError:
        street = ''

    return d


with open('wholefoods.html') as f:
    soup = BeautifulSoup(f.read())

divs = soup.find_all('div', class_='views-row')

fields = ['name', 'street', 'city', 'state', 'zipcode', 'country']
writer = csv.DictWriter(sys.stdout, fieldnames=fields)
writer.writeheader()

for div in divs:
    rowdict = process_div(div)
    if rowdict:
        writer.writerow(rowdict)
