import { useState } from 'react'

function TipButton({ percentage, subtotal, setTip }) {
  return (
    <>
    <button type="button" onClick={() => setTip(Number(subtotal) * Number(percentage/100))}>{percentage}%</button>
    </>
  )
}

function TipInput({ label, value, onInput }) {
  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onInput={onInput} />
    </div>
  )
}

function TipCalculator() {
  const [subtotal, setSubtotal] = useState(0);
  const [tip, setTip] = useState(0);
  return (
    <>
      <h1>Simulador de propina</h1>
      <TipInput label="Monto" value={subtotal} onInput={(e) => setSubtotal(e.target.value)}/>
      <div>
        <label>Propina</label>
        <TipButton percentage="15" subtotal={subtotal} setTip={setTip} />
        <TipButton percentage="20" subtotal={subtotal} setTip={setTip} />
        <TipButton percentage="25" subtotal={subtotal} setTip={setTip} />
        <TipInput label="Otra cantidad" value={tip} onInput={(e) => setTip(e.target.value)}/>
      </div>
      <h3>Propina calculada: ${tip}</h3>
      <h3>Total: ${Number(subtotal) + Number(tip)}</h3>
    </>
  )
}

function App() {
  return (
    <>
      <TipCalculator />
    </>
  )
}

export default App
