
function FormTodo({ handleTareaADD,Tarearef,descriptionRef,tareaEror,descriptionError}) {
  
  

    return ( <>
     <h1 className="fw-bold text-primary">List Todo</h1>
        <div className="container d-flex justify-content-center align-items-center bg-light col-8">
          <div className="mb-3 col-12 flex-column">
            <div className="text-center">
              <label className="form-label mx-2">Title new Todo</label>
              <input
                ref={Tarearef}
                className="form-control"
                type="text"
                placeholder="New todo"
              />
               { tareaEror && <div className="text-danger">{tareaEror}</div> }
            </div>
            <div className="text-center">
              <label className="form-label mx-2">Description</label>
              <textarea
                ref={descriptionRef}
                className="form-control"
                placeholder="New todo"
              />
               { descriptionError && <div className="text-danger">{descriptionError}</div> }
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-success" onClick={handleTareaADD}>
                <i className="bi bi-plus-circle"></i>
              </button>
             
            </div>
          </div>
        </div>
    
    </> );
}

export default FormTodo;