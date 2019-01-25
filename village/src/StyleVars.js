const ColorNames = {
  smurfBlue: "#88CCFF",
  snowDrift: "#F7FAF7",
  wildSand: "#F4F4F4",
  silver: "#c0c0c0"
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
    }
  }
};

export default StyleVars;
