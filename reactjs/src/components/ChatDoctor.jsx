import { useState, useRef, useEffect } from 'react'

const ChatDoctor = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Sen yardımsever, nazik ve bilgili bir sağlık asistanısın. Adın ChatDoctor. Biri sana selam derse selam nasıl yardımcı olayım falan de. Sağlık konusunda nasıl yardımcı olabileceğini sor .Kullanıcıların şikayetlerini dinler ve olası nedenler hakkında genel bilgilendirme yaparsın. ASLA kesin tıbbi teşhis koyma veya ilaç önereceksen risksiz ilaç öner. Gerekli Yerlerde "Bir uzmana görünmenizi öneririm" uyarısını ekle. Cevapların kısa, net ve Türkçe olsun.'
    },
    {
      role: 'assistant',
      content: 'Merhaba! Ben ChatDoctor.Muhammed Enes Barış Tarafından Oluşturuldum. Şikayetiniz nedir? Size nasıl yardımcı olabilirim?'
    }
  ])
  
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (messages.length > 2) {
      scrollToBottom()
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
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
          messages: [...messages, userMessage].filter(msg => msg.role !== 'system' || msg === messages[0]), 
          model: 'llama-3.1-8b-instant',
          temperature: 0.6
        })
      })

      const data = await response.json()
      
      if (data.choices && data.choices[0]) {
        const aiMessage = data.choices[0].message
        setMessages(prev => [...prev, aiMessage])
      }

    } catch (error) {
      console.error('Hata:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sistemlerimde geçici bir yoğunluk var. Api Keyi Kontrol Edin' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage()
  }

  return (
    <section id="doctor" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-4 text-primary">
              <i className="fa-solid fa-user-doctor me-2"></i>
              ChatDoctor'a Danışın
            </h2>
            <p className="lead text-muted mb-4">
              Semptomlarınız hakkında endişeli misiniz? Yapay zeka destekli doktorumuz 7/24 sizi dinlemek için burada.
            </p>
            
            <div className="d-flex align-items-start mb-3">
              <div className="bg-light text-primary rounded-circle p-3 me-3">
                <i className="fa-solid fa-shield-heart fa-xl"></i>
              </div>
              <div>
                <h6 className="fw-bold">Güvenilir Ön Bilgi</h6>
                <p className="small text-muted">Hastalık belirtilerini analiz eder ve çözmeye çalışır çözemezse sizi doğru uzmanlığa yönlendirir.</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="bg-light text-success rounded-circle p-3 me-3">
                <i className="fa-solid fa-clock fa-xl"></i>
              </div>
              <div>
                <h6 className="fw-bold">Her Zaman Yanınızda</h6>
                <p className="small text-muted">Gecenin bir yarısı bile olsa sağlık sorularınızı yanıtlar.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="card border-0 shadow-lg chat-interface">
              <div className="card-header bg-primary text-white p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '45px', height: '45px' }}>
                      <i className="fa-solid fa-stethoscope fa-lg"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">ChatDoctor</h6>
                      <small className="text-light opacity-75"><i className="fa-solid fa-circle fa-2xs me-1 text-warning"></i>Aktif</small>
                    </div>
                  </div>
                  <i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                </div>
              </div>
              
              <div className="card-body bg-light" style={{ height: '400px', overflowY: 'auto' }}>
                {messages.filter(m => m.role !== 'system').map((msg, index) => (
                  <div key={index} className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : ''}`}>
                    <div className={`p-3 rounded-4 shadow-sm ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white text-dark'}`} style={{ maxWidth: '85%', borderBottomLeftRadius: msg.role === 'assistant' ? '0' : '1rem', borderBottomRightRadius: msg.role === 'user' ? '0' : '1rem' }}>
                      {msg.role === 'assistant' && <strong className="d-block mb-1 text-primary small">Dr. AI</strong>}
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                   <div className="d-flex mb-3">
                     <div className="bg-white p-3 rounded-4 shadow-sm">
                       <i className="fa-solid fa-heart-pulse fa-beat text-danger me-2"></i> Düşünüyor...
                     </div>
                   </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="card-footer bg-white p-3">
                <div className="input-group input-group-lg">
                  <input 
                    type="text" 
                    className="form-control bg-light border-0" 
                    placeholder="Şikayetinizi Lütfen benimle paylaşın" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <button 
                    className="btn btn-primary px-4" 
                    onClick={handleSendMessage}
                    disabled={isLoading}
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