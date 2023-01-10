import { useEffect, useState } from "react";

function App() {

  const [state1,setState1] = useState('bye1')
  const [state2,setState2] = useState('bye2')
  const [state3,setState3] = useState('bye3')

  //! ESCUCHA CUANDO SE MONTA EL COMPONENTE
  useEffect(()=>{
    console.log('el componente app se montó');
  })
  // //! ESCUCHA CUANDO SE MONTA EL COMPONENTE Y CUANDO CAMBIAN DE ESTADO STATE1 Y STATE2
  // useEffect(()=>{
  //   console.log('el componente app se montó');
  // },[state1,state2])
  // //! ESCUCHA CUANDO SE MONTA EL COMPONENTE Y CUANDO CAMBIAN LOS ESTADOS DEL ARRAY -> EN ESTE CASO EL ARRAY ES VACIO -> NO SE ESCUCHA
  // useEffect(()=>{
  //   console.log('el componente app se montó');
  // },[])
  // //! EN EL CALLBACK DEL RETURN SE PONE EL CODIGO QUE SE EJECUTA PARA DESMONTAR Y ESCUCHA STATE1
  // useEffect(()=>{
  //   console.log('el componente app se desmontó');
  //   return ()=> console.log('el componente app se desmontó');
  // },[state1])

  return (
    <>
    <h1>Cambiar estados</h1>
    <button onClick={()=>setState1('Hello1')}>Cambiar estado 1</button>
    <button onClick={()=>setState2('Hello2')}>Cambiar estado 2</button>
    <button onClick={()=>setState3('Hello3')}>Cambiar estado 3</button>
    </>
  );
}

export default App;
