

// import {
//   trackListenStarted,
// } from '../analytics'


// type ListenButtonProps = {
//   text: string

//   title?: string
//   articleSlug?: string
//   artistSlug?: string
// }


// function ListenButton({
//   text,
//   title,
//   articleSlug,
//   artistSlug,
// }: ListenButtonProps) {

//   function handleListen() {

//     // =========================================
//     // ANALYTICS
//     // =========================================

//     trackListenStarted({
//       title,
//       articleSlug,
//       artistSlug,
//     })


//     // =========================================
//     // SPEECH
//     // =========================================

//     const speech =
//       new SpeechSynthesisUtterance(text)

//     speech.rate = 0.9
//     speech.pitch = 1
//     speech.volume = 1

//     window.speechSynthesis.cancel()

//     window.speechSynthesis.speak(
//       speech
//     )
//   }


//   function handleStop() {
//     window.speechSynthesis.cancel()
//   }


//   return (
//     <div className="listenControls">

//       <button
//         type="button"
//         onClick={handleListen}
//       >
//         Listen to Article
//       </button>


//       <button
//         type="button"
//         onClick={handleStop}
//       >
//         Stop
//       </button>

//     </div>
//   )
// }


// export default ListenButton


import {
  useRef,
  useState,
} from 'react'

import {
  trackListenStarted,
} from '../analytics'


type ListenButtonProps = {
  text: string

  title?: string
  articleSlug?: string
  artistSlug?: string

  audioSrc?: string
  audioLabel?: string
}


function ListenButton({
  text,
  title,
  articleSlug,
  artistSlug,
  audioSrc,
  audioLabel = 'Listen to Article',
}: ListenButtonProps) {

  const audioRef =
    useRef<HTMLAudioElement | null>(null)

  const [isPlaying, setIsPlaying] =
    useState(false)


  function trackListen() {

    trackListenStarted({
      title,
      articleSlug,
      artistSlug,
    })

  }


  // =========================================
  // RECORDED AUDIO
  // =========================================

  async function handleRecordedAudio() {

    trackListen()

    window.speechSynthesis.cancel()

    if (!audioRef.current && audioSrc) {

      audioRef.current =
        new Audio(audioSrc)

      audioRef.current.addEventListener(
        'ended',
        () => {
          setIsPlaying(false)
        }
      )

    }


    const audio =
      audioRef.current

    if (!audio) return


    if (audio.paused) {

      await audio.play()

      setIsPlaying(true)

    } else {

      audio.pause()

      setIsPlaying(false)

    }

  }


  // =========================================
  // SPEECH SYNTHESIS
  // =========================================

  function handleSpeech() {

    trackListen()

    const speech =
      new SpeechSynthesisUtterance(text)

    speech.rate = 0.9
    speech.pitch = 1
    speech.volume = 1

    window.speechSynthesis.cancel()

    speech.onend = () => {
      setIsPlaying(false)
    }

    setIsPlaying(true)

    window.speechSynthesis.speak(
      speech
    )

  }


  // =========================================
  // LISTEN
  // =========================================

  function handleListen() {

    if (audioSrc) {

      void handleRecordedAudio()

      return

    }

    handleSpeech()

  }


  // =========================================
  // STOP
  // =========================================

  function handleStop() {

    window.speechSynthesis.cancel()


    if (audioRef.current) {

      audioRef.current.pause()

      audioRef.current.currentTime = 0

    }


    setIsPlaying(false)

  }


  return (

    <div className="listenControls">

      <button
        type="button"
        onClick={handleListen}
      >

        {audioSrc
          ? (
              isPlaying
                ? 'Pause'
                : audioLabel
            )
          : 'Listen to Article'
        }

      </button>


      {isPlaying && (

        <button
          type="button"
          onClick={handleStop}
        >
          Stop
        </button>

      )}

    </div>

  )

}


export default ListenButton