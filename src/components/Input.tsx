import { createSignal } from "solid-js"

const [string, setString] = createSignal("");

export default function Input() {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">¿Qué producto buscas?</span>
      </label>
      <input onChange={(e) => setString(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
  )
}
export { string }