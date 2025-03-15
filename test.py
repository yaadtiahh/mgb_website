import requests
import json

url = "https://api.igdb.com/v4/games"

headers = {
    "Client-ID": "o1fqvvct2tz1j121vbcqdqbpejpkgv",
    "Authorization": "Bearer 7p6w6d9j8yzy87bc81mkoaqbjrurvh",
    "Accept": "application/json"
}

body = """
fields name, genres, rating, first_release_date, summary, platforms, multiplayer_modes, videos, tags, slug;
limit 100;
"""

response = requests.post(url, headers=headers, data=body)

response_data = response.json()
print(json.dumps(response_data, indent=4, ensure_ascii=False))
