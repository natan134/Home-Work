from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message
from aiogram.types import ContentType
from aiogram import F
from aiogram import types
import os

BOT_TOKEN = os.getenv('6945759312:AAG3lomHkmHBP4Azyw1qlERS3oX_E8ohXvQ')
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

async def process_start_command(message: Message):
    await message.answer('Привет!\nМеня зовут Эхо-бот!\nНапиши мне что-нибудь')

async def process_help_command(message: Message):
    await message.answer(
        'Напиши мне что-нибудь и в ответ '
        'я пришлю тебе твое сообщение'
    )

async def send_photo_echo(message: Message):
    await message.answer_photo(message.photo[0].file_id)

async def send_voice_echo(message: types.Message):
    await message.answer_voice(message.voice.file_id)

async def send_echo(message: Message):
    await message.answer(text=message.text)

dp.message.register(process_start_command, Command(commands='start'))
dp.message.register(process_help_command, Command(commands='help'))
dp.message.register(send_photo_echo, F.photo)
dp.message.register(send_voice_echo, F.voice)
dp.message.register(send_echo)

if __name__ == '__main__':
    dp.run_polling(bot)
