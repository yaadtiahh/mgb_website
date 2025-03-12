import requests
import json

API_KEY = "CEMFGF9-H2Q47QZ-PATNWWK-5RBSHDP"
QUERY = "Однажды в Голливуде"

url = f"https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query={QUERY}&exact=true"
headers = {"X-API-KEY": API_KEY}

response = requests.get(url, headers=headers)
data = response.json()

exact_results = [movie for movie in data.get("docs", []) if movie["name"] == QUERY]

print(json.dumps(exact_results, indent=4, ensure_ascii=False))
