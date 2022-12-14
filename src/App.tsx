import Area from '@/pages/Area'
import CustomComponents from '@/pages/CustomComponents'
import DragAndDropPage from '@/pages/DragAndDropPage'
import HomePage from '@/pages/HomePage'
import LineMaker from '@/pages/LineMaker'
import LissajousCurve from '@/pages/LissajousCurve'
import PieChart from '@/pages/PieChart'
import Symbols from '@/pages/Symbols'
import TransitionsPage from '@/pages/TransitionsPage'
import Voters from '@/pages/Voters'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path="/drag-and-drop"
        element={<DragAndDropPage />}
      />
      <Route
        path="/transitions"
        element={<TransitionsPage />}
      />
      <Route
        path="/lissajous-curve"
        element={<LissajousCurve />}
      />
      <Route
        path="/voters"
        element={<Voters />}
      />
      <Route
        path="/symbols"
        element={<Symbols />}
      />
      <Route
        path="/line-maker"
        element={<LineMaker />}
      />
      <Route
        path="/pie-chart"
        element={<PieChart />}
      />
      <Route
        path="/area"
        element={<Area />}
      />
      <Route
        path="/custom-components"
        element={<CustomComponents />}
      />
    </Routes>
  )
}
