import { createSignal } from "solid-js"

const [string, setString] = createSignal("");

export default function Input() {
  return (
    <div className="form-control w-full max-w-xs mr-2">
      <input onChange={(e) => setString(e.target.value)} type="text" placeholder="Buscar Producto" className="input input-bordered w-full max-w-xs" />
    </div>
  )
}
export { string }