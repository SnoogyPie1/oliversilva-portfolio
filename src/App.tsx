import { useState } from 'react'
import { Cursor } from '@/components/Cursor'
import { Panel } from '@/components/Panel'
import { CardScene } from '@/sections/CardScene'
import { WorkPanel } from '@/panels/WorkPanel'
import { AboutPanel } from '@/panels/AboutPanel'
import { ExperiencePanel } from '@/panels/ExperiencePanel'
import { ContactPanel } from '@/panels/ContactPanel'

type PanelId = 'work' | 'about' | 'experience' | 'contact' | null

export default function App() {
  const [panel, setPanel] = useState<PanelId>(null)
  const close = () => setPanel(null)

  return (
    <div className="grain vignette relative h-[100svh] overflow-hidden">
      <Cursor />
      <CardScene onOpenPanel={(p) => setPanel(p)} />

      <Panel open={panel === 'work'} onClose={close} title="Selected Work">
        <WorkPanel />
      </Panel>
      <Panel open={panel === 'about'} onClose={close} title="About">
        <AboutPanel />
      </Panel>
      <Panel open={panel === 'experience'} onClose={close} title="Experience">
        <ExperiencePanel />
      </Panel>
      <Panel open={panel === 'contact'} onClose={close} title="Contact">
        <ContactPanel />
      </Panel>
    </div>
  )
}
