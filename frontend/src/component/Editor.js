// import React from 'react'

// const Editor = () => {
//   return (
//     <div className="container-1">
//   <h2>Image Editor</h2>
//   <div className="wrapper d-flex">
//     <div className="editor-panel me-3">
//       <div className="filter">
//         <label className="title fs-4 text-center">Filters</label>
//         <div className="options">
//           <button className="btn btn-info mt-3 ms-2 pe-3 text-center">
//             Brightness
//           </button>
//           <button className="btn btn-info mt-3 ms-3 pe-3 ">Saturation</button>
//           <button className="btn btn-info mt-3 ms-2">Inversion</button>
//           <button className="btn btn-info mt-3 ms-3">Grayscale</button>
//         </div>
//         <div className="slider">
//           <div className="filter-info">
//             <p className="name fs-4 text-center pt-2">Brightness</p>
//             <p className="value fs-5">100%</p>
//           </div>
//           <input type="range" defaultValue={100} min={0} max={200} />
//         </div>
//       </div>
//       <div className="rotate text-center">
//         <label className="title fs-2 mb-4">Rotate &amp; Flip</label>
//         <div className="options">
//           <button className="btn btn-dark">
//             <i className="fa fa-repeat" />
//           </button>
//           <button className="btn btn-dark">
//             <i className="fa fa-undo" />
//           </button>
//           <button className="btn btn-dark">
//             <i className="fa fa-repeat" />
//           </button>
//           <button className="btn btn-dark">
//             <i className="fa fa-undo" />
//           </button>
//           {/* <span class="bx:reflect-vertical"></span> */}
//         </div>
//       </div>
//     </div>
//     <div className="preview-img pt-5">
//       <img
//         src="https://alxgroup.com.au/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
//         className="img-fluid w-100 mt-3 mb-3"
//         alt="preview-img"
//       />
//     </div>
//   </div>
//   <div className="controls">
//     <button className="reset-filter btn btn-primary">Reset Filter</button>
//     <div className="row-btn">
//       <button className="choose-img btn btn-primary mt-3">Choose Image</button>
//       <button className="save-image btn btn-primary mt-3">Save Image</button>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Editor