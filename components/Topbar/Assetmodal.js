"use client"

import "./Assetmodal.css"

export default function Assetmodal({ isOpen, onClose }){
  if(!isOpen) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <div className="modal-body">
          <h2>Add Assets</h2>

          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <div className="modal-grid">
              <div className="left-col">
                <div className="left-upper">
                  <div className="section">
                    <label className="section-title" id="label-category">SELECT CATEGORY</label>
                    <select className="input" id="category">
                      <option value="">Select...</option>
                      <option>IT Asset</option>
                      <option>Non IT Asset</option>
                      <option>Accesories</option>
                    </select>
                    <div className="sub-label">Quick Select</div>
                    <QuickSelect />
                  </div>
                </div>

                <div className="left-lower">
                  <div className="lower-left">
                    <label className="label" id="label-assetName">Asset name</label>
                    <input className="input" placeholder="Asset name" id="assetName" />

                    <label className="label" id="label-assetId">Asset id</label>
                    <input className="input" placeholder="Asset id" id="assetId" />

                    <label className="label" id="label-model">Model</label>
                    <input className="input" placeholder="Model" id="model" />
                  </div>

                  <div className="lower-right">
                    <label className="label" id="label-brand">Brand</label>
                    <input className="input" placeholder="Brand" id="brand" />

                    <label className="label" id="label-purchaseDate">Purchase Date</label>
                    <input className="input" type="date" id="purchaseDate" />

                    <label className="label" id="label-purchaseCost">Purchase Cost</label>
                    <input className="input" placeholder="Purchase Cost" id="purchaseCost" />
                  </div>
                </div>
              </div>

              <div className="right-col">
                <div className="right-content">
                  <h3>OWNERSHIP</h3>
                  <label className="label" id="label-assignedTo">Assigned To</label>
                  <input className="input" placeholder="Name" id="assignedTo" />

                  <label className="label" id="label-department">Department</label>
                  <select className="input" id="department">
                    <option value="">Select...</option>
                    <option>front office</option>
                    <option>back office</option>
                  </select>

                  <label className="label" id="label-tags">Tags</label>
                  <TagInput />
                </div>

                <div className="right-actions">
                  <button className="submit-btn" onClick={() => handleSubmit(onClose)}>Add+</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function handleSubmit(closeModal){
  document.querySelectorAll('.label, .section-title').forEach(l => l.classList.remove('invalid'))
  document.querySelectorAll('.input').forEach(i => i.classList.remove('invalid'))
  const categoryVal = document.getElementById('category')?.value || ''
  const quickVal = document.querySelector('.quick-buttons button.selected')?.dataset?.value || ''
  const data = {
    category: categoryVal,
    quickSelect: quickVal,
    assetDetails: {
      name: document.getElementById('assetName')?.value || '',
      id: document.getElementById('assetId')?.value || '',
      model: document.getElementById('model')?.value || '',
      brand: document.getElementById('brand')?.value || '',
      purchaseDate: document.getElementById('purchaseDate')?.value || '',
      purchaseCost: document.getElementById('purchaseCost')?.value || ''
    },
    ownership: {
      assignedTo: document.getElementById('assignedTo')?.value || '',
      department: document.getElementById('department')?.value || '',
      tags: Array.from(document.querySelectorAll('.tag')).map(t => t.textContent)
    }
  }
  let hasError = false
  if(!data.category && !data.quickSelect){
    const catLabel = document.getElementById('label-category')
    if(catLabel) catLabel.classList.add('invalid')
    const catInput = document.getElementById('category')
    if(catInput) catInput.classList.add('invalid')
    hasError = true
  }
  const assetFields = ['assetName','assetId','model','brand','purchaseDate','purchaseCost']
  assetFields.forEach(id => {
    const v = document.getElementById(id)?.value || ''
    if(!v){
      const lab = document.getElementById('label-' + id)
      if(lab) lab.classList.add('invalid')
      const inp = document.getElementById(id)
      if(inp) inp.classList.add('invalid')
      hasError = true
    }
  })
  if(!data.ownership.assignedTo){
    const lab = document.getElementById('label-assignedTo')
    if(lab) lab.classList.add('invalid')
    const inp = document.getElementById('assignedTo')
    if(inp) inp.classList.add('invalid')
    hasError = true
  }
  if(!data.ownership.department){
    const lab = document.getElementById('label-department')
    if(lab) lab.classList.add('invalid')
    const inp = document.getElementById('department')
    if(inp) inp.classList.add('invalid')
    hasError = true
  }
  if(hasError) return
  const assetCategory = data.quickSelect || data.category
  const out = {
    assetCategory,
    assetDetails: data.assetDetails,
    ownership: data.ownership
  }
  console.log('Form submit:', out)
  try{
    const win = window.open('', '_blank')
    if(win){
      const safe = JSON.stringify(out, null, 2).replace(/</g, '&lt;')
      win.document.write(`<pre>${safe}</pre>`)
      win.document.close()
    }
  }catch(e){
  }
}

function QuickSelect(){
  const options = ['IT Asset','Non IT Asset','Accesories']
  function toggle(e){
    const btns = e.currentTarget.parentNode.querySelectorAll('button')
    btns.forEach(b => b.classList.remove('selected'))
    e.currentTarget.classList.add('selected')
  }
  return (
    <div className="quick-buttons">
      {options.map((opt,i) => (
        <button type="button" key={i} data-value={opt} onClick={toggle}>{opt}</button>
      ))}
    </div>
  )
}

function TagInput(){
  function addTag(){
    const input = document.getElementById('tag-input')
    const v = input.value.trim()
    if(!v) return
    const chip = document.createElement('span')
    chip.className = 'tag'
    chip.textContent = v
    chip.onclick = () => chip.remove()
    document.getElementById('tags-wrap').appendChild(chip)
    input.value = ''
  }
  return (
    <div className="tags">
      <div id="tags-wrap" className="tags-wrap"></div>
      <div className="tag-input-row">
        <input id="tag-input" className="input" placeholder="Add tag" />
        <button type="button" className="tag-add" onClick={addTag}>Add</button>
      </div>
    </div>
  )
}
