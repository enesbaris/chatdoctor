import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const ChatDoctor = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Sen Dr. Mundo AI adında profesyonel bir sağlık asistanısın. Cevapların her zaman Türkçe, kibar, eğitici ve Markdown formatında (kalın başlıklar, maddeler) olsun. Asla kesin tıbbi teşhis koyma, her zaman bir uzmana yönlendir. Kullanıcı "selam", "merhaba" derse kendini tanıt.'
    },
    {
      role: 'assistant',
      content: 'Merhaba! Ben **Dr. Mundo AI**. 🩺\n\nSağlığınızla ilgili merak ettiğiniz her şeyi bana sorabilirsiniz. Şikayetiniz nedir?'
    }
  ])
  
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef(null)

  const quickQuestions = [
    "🤕 Baş ağrısına ne iyi gelir?",
    "🥗 Kilo vermek için öneriler",
    "😴 Uyku düzenim bozuk",
    "flu Grip belirtileri nelerdir?"
  ]

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (messages.length > 2) {
      scrollToBottom()
    }
  }, [messages, isLoading])

  const handleSendMessage = async (textInput = input) => {
    if (!textInput.trim()) return

    const userMessage = { role: 'user', content: textInput }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [
            messages[0], 
            ...messages.slice(-6).filter(m => m.role !== 'system'), 
            userMessage
          ], 
          model: 'llama-3.1-8b-instant',
          temperature: 0.5,
          max_tokens: 1000
        })
      })

      const data = await response.json()
      
      if (data.choices && data.choices[0]) {
        const aiMessage = data.choices[0].message
        setMessages(prev => [...prev, aiMessage])
      }

    } catch (error) {
      console.error(error)
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Bağlantı hatası oluştu. Lütfen tekrar deneyin.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage()
  }

  const clearChat = () => {
    setMessages([messages[0], messages[1]])
  }

  return (
    <section id="doctor" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-stretch">
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="h-100 p-4 bg-light rounded-4 border border-light-subtle d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3 text-primary">
                  <i className="fa-solid fa-user-doctor me-2"></i>
                  Dr. Mundo AI
                </h2>
                <p className="text-muted mb-4">
                  En son Llama-3 teknolojisi ile güçlendirilmiş sağlık asistanınız. Semptomlarınızı analiz eder ve size bilimsel verilerle rehberlik eder.
                </p>
                <div className="d-grid gap-3">
                  <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm">
                    <i className="fa-solid fa-shield-virus text-success fa-xl me-3"></i>
                    <div>
                      <h6 className="mb-0 fw-bold">Güvenli Analiz</h6>
                      <small className="text-muted">Verileriniz korunur.</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm">
                    <i className="fa-solid fa-clock text-primary fa-xl me-3"></i>
                    <div>
                      <h6 className="mb-0 fw-bold">7/24 Aktif</h6>
                      <small className="text-muted">Bekleme süresi yok.</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="alert alert-warning border-0 small">
                  <i className="fa-solid fa-triangle-exclamation me-2"></i>
                  Yapay zeka önerileri tıbbi teşhis yerine geçmez. Acil durumlarda doktora başvurun.
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card border-0 shadow-lg chat-interface h-100">
              
              <div className="card-header bg-primary text-white p-3 border-0 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center border border-2 border-white" style={{ width: '45px', height: '45px' }}>
                    <i className="fa-solid fa-robot fa-lg"></i>
                  </div>
                  <div className="ms-3">
                    <h6 className="mb-0 fw-bold">Dr. Mundo Asistan</h6>
                    <small className="text-white-50"><i className="fa-solid fa-circle fa-2xs text-success me-1"></i>Çevrimiçi</small>
                  </div>
                </div>
                <button onClick={clearChat} className="btn btn-sm btn-outline-light border-0" title="Sohbeti Temizle">
                  <i className="fa-solid fa-rotate-right"></i>
                </button>
              </div>
              
              <div className="card-body bg-light chat-body d-flex flex-column" style={{ height: '500px', overflowY: 'auto' }}>
                <div className="flex-grow-1">
                  {messages.filter(m => m.role !== 'system').map((msg, index) => (
                    <div key={index} className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                      {msg.role === 'assistant' && (
                        <div className="flex-shrink-0 me-2 mt-1">
                          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '30px', height: '30px', fontSize: '10px' }}>AI</div>
                        </div>
                      )}
                      <div 
                        className={`message-bubble p-3 shadow-sm ${
                          msg.role === 'user' 
                            ? 'bg-primary text-white rounded-top-4 rounded-start-4' 
                            : 'bg-white text-dark rounded-top-4 rounded-end-4'
                        }`} 
                        style={{ maxWidth: '85%' }}
                      >
                        <div className="markdown-content">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                        <div className={`text-end mt-1 opacity-50`} style={{ fontSize: '0.65rem' }}>
                          {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="d-flex mb-3 ms-5">
                      <div className="bg-white px-3 py-2 rounded-4 shadow-sm">
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                        <span className="typing-dot"></span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              </div>

              <div className="card-footer bg-white p-3 border-top-0">
                {!isLoading && messages.length < 4 && (
                  <div className="d-flex gap-2 overflow-auto pb-2 mb-2" style={{ scrollbarWidth: 'none' }}>
                    {quickQuestions.map((q, i) => (
                      <button 
                        key={i} 
                        className="btn btn-sm btn-outline-secondary rounded-pill chip-btn border-0 bg-light text-dark small"
                        onClick={() => handleSendMessage(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div className="input-group input-group-lg border rounded-pill overflow-hidden shadow-sm">
                  <input 
                    type="text" 
                    className="form-control border-0 bg-white ps-4" 
                    placeholder="Şikayetinizi buraya yazın..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    style={{ fontSize: '0.95rem' }}
                  />
                  <button 
                    className="btn btn-primary px-4 border-0" 
                    onClick={() => handleSendMessage()}
                    disabled={isLoading || !input.trim()}
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatDoctor