import excel2json
import os

excel2json.convert_from_file('saint_lucia.xlsx')
os.rename("Schools Survey for Giga.json", "Data.json")
