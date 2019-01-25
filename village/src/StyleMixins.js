const StyleMixins = {
  makeFlex: (flexDirection, justifyContent, alignItems, flexWrap) => `
    display: flex;
    flex-flow: ${flexDirection || "row"} ${flexWrap || "nowrap"};
    justify-content: ${justifyContent || "flex-start"};
    align-items: ${alignItems || "flex-start"};
  `,
  removeHyperlinkStyling: color => `
    text-decoration: none;
    color: ${color};
  `,
  FormInputs: {
    makeFormTextField: () => `
      width: 100%;
      padding: 10px 15px;
      border-top: none;
      border-right: none;
      border-left: none;
      margin: 5px auto;
    `,
    makeFormNumberField: () => `
      width: 20%;
      padding: 10px 15px;
      border-top: none;
      border-right: none;
      border-left: none;
      margin: 5px 0 5px 20px;
    `,
    makeFormButton: (bgColor, fontColor, borderColor) => `
      text-align: center;
      width: 87.5%;
      background-color: ${bgColor};
      font-size: 1.8rem;
      font-weight: bold;
      color: ${fontColor};
      box-shadow: 2px 2px 1px 1px black;
      padding: 10px;
      border: 1px solid ${borderColor};
      border-radius: 2.5px;
      margin: 15px auto;
      transition: filter 375ms;

      &:hover {
        filter: brightness(75%);
        transition: all 250ms;
      }

      &:active {
        box-shadow: none;
      }
    `
  }
  
  
};

export default StyleMixins;
