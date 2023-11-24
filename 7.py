import requests

folder_id = "Каталог"
iam_token = "IAM-token"
speech_file_path = "audio_2023-10-27_23-14-10.ogg"
result_name_file = speech_file_path[:-4] + '.txt'
url = f"https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?folderId={folder_id}&lang=ru-RU"
headers = {
    "Authorization": f"Bearer {iam_token}"
}
data = open(speech_file_path, 'rb').read()

response = requests.post(url, headers=headers, data=data)

if response.status_code == 200:
    result = response.json()
    Sfile = open(result_name_file, "w")
    Sfile.write(str(result))
    Sfile.close()
    # Обработка результатов распознавания речи
    print(result)
else:
    print("Произошла ошибка при распознавании речи.")
