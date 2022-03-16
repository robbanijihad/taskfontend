/**
 * belajar componen react js 
 */

 const Hello = ({name,major}) => {
  return(
      <div className="hello">
          <h1>
              hallo react js
          </h1>
          <p>
              Nama saya {name}, saya seorang mahasiswa enep
          </p>
          <p>
              jurusan saya {major}, semester 4
          </p>
      </div>
  );
}

export default Hello;
