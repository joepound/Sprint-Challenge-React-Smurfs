const ColorNames = {
  smurfBlue: "#88CCFF",
  snowDrift: "#F7FAF7",
  wildSand: "#F4F4F4",
  silver: "#c0c0c0",
  white: "#FFFFFF"
};

const StyleVars = {
  Fonts: {
    Global: {
      bodyFontFamily: '"Roboto", sans-serif'
    }
  },
  Colors: {
    Header: {
      bgColor: ColorNames.smurfBlue,
      fontColor: ColorNames.snowDrift
    },
    DisplayArea: {
      bgColor: ColorNames.wildSand
    },
    Form: {
      Label: {
        fontColor: ColorNames.smurfBlue
      },
      Input: {
        fontColor: ColorNames.smurfBlue
      },
      Button: {
        bgColor: ColorNames.smurfBlue,
        fontColor: ColorNames.snowDrift,
        borderColor: ColorNames.silver
      }
    },
    Village: {
      Header: {
        bgColor: ColorNames.white,
        fontColor: ColorNames.smurfBlue
      },
      Selection: {
        bgColor: ColorNames.white,
        fontColor: ColorNames.smurfBlue
      },
      SelectInput: {
        bgColor: ColorNames.white,
        fontColor: ColorNames.smurfBlue
      }
    }
  }
};

export default StyleVars;
