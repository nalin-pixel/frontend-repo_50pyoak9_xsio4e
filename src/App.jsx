import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [snippets, setSnippets] = useState([])
  const [form, setForm] = useState({ title: '', filename: '', language: '', tags: '', content: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchSnippets = async () => {
    try {
      const res = await fetch(`${BACKEND}/api/snippets`)
      const data = await res.json()
      setSnippets(data)
    } catch (e) {
      // ignore for now
    }
  }

  useEffect(() => {
    fetchSnippets()
  }, [])

  const submitSnippet = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const body = {
        title: form.title || 'Untitled',
        filename: form.filename || undefined,
        language: form.language || undefined,
        tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : undefined,
        content: form.content,
      }
      const res = await fetch(`${BACKEND}/api/snippets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        throw new Error(d.detail || 'Failed to submit')
      }
      setForm({ title: '', filename: '', language: '', tags: '', content: '' })
      await fetchSnippets()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <Header name="Anon Code Share" github="https://github.com/" />
      <main className="pt-24">
        <Hero title="Share code anonymously" subtitle="Paste your snippet, publish instantly, and let others download it." ctaText="Add a snippet" />

        <section className="py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <form onSubmit={submitSnippet} className="rounded-2xl border border-slate-700/40 bg-slate-800/60 p-6">
                <h3 className="text-xl font-semibold mb-4">Add your code</h3>

                {error && <p className="mb-3 text-red-300 bg-red-900/30 border border-red-700/40 p-2 rounded">{error}</p>}

                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} placeholder="Title" className="px-3 py-2 rounded bg-slate-900/70 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input value={form.filename} onChange={e=>setForm(f=>({...f,filename:e.target.value}))} placeholder="Filename (optional)" className="px-3 py-2 rounded bg-slate-900/70 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <input value={form.language} onChange={e=>setForm(f=>({...f,language:e.target.value}))} placeholder="Language (optional)" className="px-3 py-2 rounded bg-slate-900/70 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                  <input value={form.tags} onChange={e=>setForm(f=>({...f,tags:e.target.value}))} placeholder="Tags (comma separated)" className="px-3 py-2 rounded bg-slate-900/70 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>

                <textarea value={form.content} onChange={e=>setForm(f=>({...f,content:e.target.value}))} placeholder="Paste your code here" rows={10} className="w-full px-3 py-2 rounded bg-slate-900/70 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3 font-mono text-sm"></textarea>

                <button disabled={loading} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-medium shadow-lg shadow-blue-600/30 transition">
                  {loading ? 'Submitting...' : 'Publish snippet'}
                </button>
              </form>

              <div className="rounded-2xl border border-slate-700/40 bg-slate-800/60 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Latest snippets</h3>
                  <button onClick={fetchSnippets} className="text-sm text-blue-300 hover:text-white">Refresh</button>
                </div>

                <div className="space-y-4">
                  {snippets.length === 0 && (
                    <p className="text-slate-300 text-sm">No snippets yet. Be the first!</p>
                  )}
                  {snippets.map((s)=> (
                    <div key={s.id} className="rounded-xl border border-slate-700/40 bg-slate-900/60 overflow-hidden">
                      <div className="p-4 border-b border-slate-700/40 flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">{s.title}</h4>
                          <p className="text-xs text-slate-400">{s.language || 'plain'} {s.filename ? `• ${s.filename}` : ''}</p>
                        </div>
                        {s.filename && (
                          <a
                            href={`data:text/plain;charset=utf-8,${encodeURIComponent(s.content)}`}
                            download={s.filename}
                            className="text-sm px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700/60"
                          >
                            Download
                          </a>
                        )}
                      </div>
                      <pre className="p-4 text-xs overflow-auto max-h-60 bg-slate-950/70"><code>{s.content}</code></pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Contact email="you@example.com" />
      </main>
    </div>
  )
}
