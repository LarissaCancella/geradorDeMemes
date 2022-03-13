ADD raw image to ./img

CONFIG index with the text

RUN docker-compose up --build

- USING GM:
 RUN docker exec -it geradordememes_meme-maker_1 bash
 RUN gm -convert "img/meme.jpg" -monochrome meme.jpg