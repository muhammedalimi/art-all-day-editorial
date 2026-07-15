type ListenButtonProps = {
  text: string
}

function ListenButton({ text }: ListenButtonProps) {
  function handleListen() {
    const speech = new SpeechSynthesisUtterance(text)

    speech.rate = 0.9
    speech.pitch = 1
    speech.volume = 1

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(speech)
  }

  function handleStop() {
    window.speechSynthesis.cancel()
  }

  return (
    <div className="listenControls">
      <button type="button" onClick={handleListen}>
        Listen to Article
      </button>

      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </div>
  )
}

export default ListenButton