const phoneNumber = '918296210700'
   const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }


  export {handleCall,handleClick}