import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskManager } from './TaskManager'

import './index.css'


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<TaskManager />
	</StrictMode>,
)
