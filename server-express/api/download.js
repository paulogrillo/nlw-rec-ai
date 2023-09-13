import ytdl from 'ytdl-core'
import fs from 'fs'
import { error, info } from 'console'

export const download = (shortId) => {
    const url = "https://www.youtube.com/shorts/" + shortId
    console.log("Download by shortId", shortId)

    ytdl(url, { quality: "lowestaudio", filter: "audioonly" })
    .on(
        "info",
        (info) => {
            const seconds = info.formats[0].approxDurationMs / 100
            console.log(seconds)

            if(seconds > 65){
                throw new Error("Length of video exceeds 60 seconds.")
            }
        }
    ).on("end", () => {
            console.log("Finish download.")
        }
    ).on("error", (error) => {
            console.log("Error download", error)
        } 
    ).pipe(fs.createWriteStream("./tmp/audio.mp4"))
}