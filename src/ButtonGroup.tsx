function ButtonGroup() {
  const buttons = ["Red", "Green", "Blue"];

  const buttonTags = buttons.map(buttonName => (
    <button type="button" onClick={() => console.log(buttonName)}>
      {buttonName}
    </button>
  ));
  return <>{buttonTags}</>;
}

export default ButtonGroup;
