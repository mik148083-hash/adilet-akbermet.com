// Сайттын музыка жана баштапкы каалоо-тилек жөндөөлөрү
// === МУЗЫКА: "Ordinary" ===
        // MP3 файлды бул жерге data URI же URL катары койсоңуз, ошол ойнойт.
        // Бош болсо — мурунку жумшак синтезатор ойнойт.
        const MUSIC_SRC = "";
        let MUSIC_BLOB = null;
        // YouTube видеонун ID'си (шилтемедеги v= дан кийинки бөлүк). Музыка ушундан ойнойт.
        const YT_ID = "u2ah9tWTkmk";
        let ytPlayer = null, ytReady = false, ytWantPlay = false;
        let audioEl = null;

        // Initial sample guest wishes (stored in localStorage as well)
        const defaultWishes = [
            {
                name: "Нурлан & Айзада",
                status: "Жубайым / үй-бүлөм менен келем",
                wish: "Адилет, Акбермет! Кармашкан колуңар үзүлбөсүн, бактылуу түгөйлөрдөн болгула! Үйүңөрдөн кут, береке кетпесин!",
                time: "Бүгүн"
            },
            {
                name: "Бакытбек агай",
                status: "Сөзсүз келем!",
                wish: "Жаш жубайларга ак жол, узун өмүр, бекем ден соолук каалайм. Куш бооңор бек болсун!",
                time: "Кечээ"
            }
        ];
