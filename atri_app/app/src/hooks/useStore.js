import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "height": "36px",
        "alignItems": "center",
        "marginLeft": "0px",
        "marginBottom": "32px",
        "marginTop": "32px",
        "paddingLeft": "50px",
        "marginRight": "50px"
      },
      "callbacks": {}
    },
    "Div1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "",
        "marginLeft": "15px"
      },
      "callbacks": {}
    },
    "Textbox1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "30px",
        "textAlign": "center",
        "lineHeight": "",
        "boxSizing": "inherit",
        "height": "",
        "outlineColor": "",
        "cursor": "pointer",
        "fontFamily": "Open Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "alignItems": "center",
        "flexDirection": "row",
        "flexWrap": "nowrap",
        "width": "",
        "color": "#0d0d0dff",
        "fontFamily": "Open Sans",
        "fontWeight": 600
      },
      "callbacks": {}
    },
    "Div2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginRight": "32px"
      },
      "callbacks": {}
    },
    "TextBox2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "backgroundColor": "",
        "color": "#0d0d0d",
        "fontSize": "18px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginRight": "32px"
      },
      "callbacks": {}
    },
    "TextBox3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "18px",
        "color": "#0d0d0dff",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginRight": "32px",
        "fontSize": "18px",
        "cursor": "pointer"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingRight": "0px",
        "marginRight": "32px"
      },
      "callbacks": {}
    },
    "TextBox6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown3": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "outlineWidth": "0px",
        "outlineStyle": "none",
        "borderWidth": "0px",
        "cursor": "pointer"
      },
      "custom": {
        "values": [],
        "selectedValue": ""
      },
      "callbacks": {}
    },
    "Flex5": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "inline-block",
        "alignSelf": "center",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Image1": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "32px",
        "alignSelf": "center",
        "lineHeight": "16px",
        "paddingTop": "3px",
        "cursor": "pointer"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/bagIcon.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "15px",
        "marginRight": "15px"
      },
      "callbacks": {}
    },
    "TextBox7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "borderWidth": "",
        "fontSize": "60px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "paddingLeft": "35px",
        "paddingRight": "50px",
        "marginTop": "150px"
      },
      "custom": {
        "text": "I'm Sam, and I design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex99": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "paddingLeft": "50px",
        "marginRight": "",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "inline-block",
        "borderRadius": "",
        "borderWidth": "",
        "borderStyle": "none",
        "borderBottomWidth": "6px",
        "borderBottomStyle": "solid",
        "borderColor": "#000000"
      },
      "callbacks": {}
    },
    "TextBox10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "60px"
      },
      "custom": {
        "text": "user interfaces"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "60px",
        "marginLeft": "0px",
        "paddingLeft": "10px"
      },
      "custom": {
        "text": "    for startups"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "30px",
        "fontFamily": "Open Sans",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "22px",
        "color": "#686868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "22px",
        "color": "#686868",
        "marginTop": "10px"
      },
      "custom": {
        "text": "ad minim veniam quis nostrud"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "22px",
        "color": "#686868",
        "marginTop": "10px"
      },
      "custom": {
        "text": "eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "150px",
        "alignSelf": "center",
        "marginLeft": "",
        "overflow": "visible",
        "display": "block",
        "textAlign": "center"
      },
      "callbacks": {}
    },
    "TextBox16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "",
        "fontSize": "60px",
        "marginTop": "100px",
        "alignSelf": "auto",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "paddingLeft": "15px",
        "paddingRight": "15px"
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Image2": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Div26": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox17": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div38": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc",
        "alignSelf": "center",
        "marginTop": "200px",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image4": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image5": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px",
        "cursor": "pointer",
        "fontFamily": "",
        "fontWeight": 700,
        "textAlign": "left"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "23px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "fontFamily": "Open Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image6": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project4.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "50%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Div58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "",
        "marginTop": "80px",
        "marginLeft": "",
        "marginBottom": "80px",
        "borderWidth": "2px",
        "borderStyle": "solid",
        "borderColor": "#59535380",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox34": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div60": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div61": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div62": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image7": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div67": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "center",
        "display": "contents",
        "wordWrap": "normal"
      },
      "callbacks": {}
    },
    "TextBox39": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "",
        "fontSize": "45px",
        "marginTop": "",
        "alignSelf": "auto",
        "lineHeight": "60px",
        "color": "#000000",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "float": "none",
        "clear": "both",
        "width": "235px",
        "fontFamily": ""
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div71": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox40": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px",
        "cursor": "pointer",
        "fontFamily": "",
        "fontWeight": 600
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "23px",
        "lineHeight": "30px",
        "marginBottom": "15px",
        "color": "#000000",
        "fontFamily": "Open Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div72": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div73": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div74": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div75": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image8": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "50%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px",
        "fontFamily": ""
      },
      "callbacks": {}
    },
    "Div77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex16": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div78": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "",
        "marginTop": "80px",
        "marginLeft": "",
        "marginBottom": "80px",
        "borderWidth": "2px",
        "borderStyle": "solid",
        "borderColor": "#59535380",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox44": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px",
        "cursor": "pointer",
        "fontFamily": "",
        "fontWeight": 700
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox46": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "23px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "fontFamily": "Open Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div79": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div80": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div81": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image9": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project3.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div83": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "50%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Div84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex17": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div85": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "",
        "marginTop": "80px",
        "marginLeft": "",
        "marginBottom": "80px",
        "borderWidth": "2px",
        "borderStyle": "solid",
        "borderColor": "#59535380",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div86": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "200px"
      },
      "callbacks": {}
    },
    "Flex18": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "center",
        "marginBottom": "150px"
      },
      "callbacks": {}
    },
    "Div87": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex19": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Div89": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000"
      },
      "callbacks": {}
    },
    "TextBox48": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "88px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px",
        "cursor": "pointer",
        "fontFamily": "",
        "fontWeight": ""
      },
      "custom": {
        "text": "About me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "40px",
        "lineHeight": "50px",
        "marginBottom": "20px",
        "color": "#000000",
        "wordWrap": "break-word",
        "fontFamily": "Open Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Who’s behind all this great work?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div90": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Image10": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "50%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Div95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%",
        "height": "auto"
      },
      "callbacks": {}
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "15px",
        "paddingRight": "15px"
      },
      "callbacks": {}
    },
    "Div96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "",
        "marginTop": "80px",
        "marginLeft": "",
        "marginBottom": "80px",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "150px",
        "marginBottom": "150px"
      },
      "callbacks": {}
    },
    "Div101": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Div102": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "float": "none",
        "backgroundPositionX": ""
      },
      "callbacks": {}
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-between",
        "marginBottom": "30px",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox53": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "65px",
        "wordWrap": "break-word",
        "fontFamily": "Open Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "My work skills"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000"
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div106": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image11": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Atri123.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "",
        "fontSize": "40px",
        "marginTop": "",
        "alignSelf": "auto",
        "lineHeight": "60px",
        "color": "#000000",
        "borderBottomWidth": "",
        "borderBottomStyle": "none",
        "float": "none",
        "clear": "both",
        "width": ""
      },
      "custom": {
        "text": "Past Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "row",
        "flexWrap": "wrap",
        "alignContent": "center",
        "justifyContent": "space-between",
        "borderBottomColor": "#000000",
        "marginBottom": "200px"
      },
      "callbacks": {}
    },
    "Image12": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "Web Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "Brand Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo5.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div113": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000"
      },
      "callbacks": {}
    },
    "TextBox63": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "Motion Graphics"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px",
        "marginRight": "",
        "paddingLeft": ""
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div114": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000",
        "marginRight": ""
      },
      "callbacks": {}
    },
    "TextBox65": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "UI/UX Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div115": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "3px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000"
      },
      "callbacks": {}
    },
    "TextBox67": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "Product Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div116": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000"
      },
      "callbacks": {}
    },
    "TextBox71": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "10px"
      },
      "custom": {
        "text": "User Research"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "marginBottom": "18px",
        "color": "#4d4848ff",
        "lineHeight": "24px",
        "fontSize": "18px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "height": "120px",
        "marginBottom": "18px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div118": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "",
        "width": "350px",
        "marginBottom": "",
        "boxSizing": "content-box",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#000000"
      },
      "callbacks": {}
    },
    "Div121": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "",
        "marginBottom": "30px",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div122": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div123": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "200px"
      },
      "callbacks": {}
    },
    "Div124": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox76": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "Design   ....   September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div128": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div129": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image19": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project5.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div130": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "45%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Div131": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%"
      },
      "callbacks": {}
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div133": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "30px",
        "marginTop": "30px"
      },
      "callbacks": {}
    },
    "TextBox78": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "Design   ....   September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/footer2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div135": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Div136": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox80": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "120px",
        "backgroundClip": "content-box",
        "WebkitBackgroundClip": "content-box",
        "alignSelf": "center",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid",
        "lineHeight": "35px",
        "marginTop": "30px",
        "fontFamily": "",
        "fontWeight": 700
      },
      "custom": {
        "text": "View project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "",
        "lineHeight": "30px",
        "outlineColor": "#544a4ae6",
        "color": "#4d4848"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque drogon sit amenot."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          },
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "23px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "fontFamily": "Open Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "Website design for finance startup"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343"
      },
      "custom": {
        "text": "AppX   ....   WebDesign"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div139": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div140": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div141": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div142": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Image21": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/project2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "50%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Div144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex32": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div145": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "height": "",
        "marginTop": "80px",
        "marginLeft": "",
        "marginBottom": "80px",
        "borderWidth": "2px",
        "borderStyle": "solid",
        "borderColor": "#59535380",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div146": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "100px"
      },
      "callbacks": {}
    },
    "Div147": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "100px",
        "marginBottom": "100px"
      },
      "callbacks": {}
    },
    "Div148": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div149": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex33": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox84": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "fontSize": "20px",
        "lineHeight": "25px",
        "marginBottom": "20px",
        "color": "#4c4343",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "Design   ....   September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "25px",
        "lineHeight": "30px",
        "marginBottom": "20px",
        "color": "#000000",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "What did I learn from doing 50+ design sprints?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/footer2.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div150": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "alignSelf": "center",
        "textAlign": "left"
      },
      "callbacks": {}
    },
    "Div151": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div152": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "55%"
      },
      "callbacks": {}
    },
    "Div153": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "visibility": "visible",
        "width": "45%",
        "alignSelf": "center",
        "boxSizing": "border-box",
        "paddingLeft": "20px",
        "marginRight": "10px",
        "paddingRight": "0px"
      },
      "callbacks": {}
    },
    "Flex34": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Div155": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "0px",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Flex36": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "justifyContent": "space-around",
        "height": "2px"
      },
      "callbacks": {}
    },
    "TextBox86": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "",
        "borderWidth": "",
        "fontSize": "60px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "custom": {
        "text": "Interested in working together?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "50px",
        "marginLeft": "0px",
        "paddingLeft": "10px",
        "fontFamily": "Open Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": " today."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "60px",
        "fontFamily": "Open Sans",
        "fontWeight": 600
      },
      "custom": {
        "text": "Get in touch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div156": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div157": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "display": "inline-block",
        "borderRadius": "",
        "borderWidth": "",
        "borderStyle": "none",
        "borderBottomWidth": "6px",
        "borderBottomStyle": "solid",
        "borderColor": "#000000"
      },
      "callbacks": {}
    },
    "Flex37": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "TextBox89": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "22px",
        "color": "#686868",
        "marginTop": "10px",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "sed mauris sollicitudin id ornare egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "22px",
        "color": "#686868",
        "wordWrap": "break-word"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit nulla arcu porttitor molestie"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div159": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "30px",
        "marginBottom": "160px"
      },
      "callbacks": {}
    },
    "Div160": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginLeft": "0px",
        "paddingLeft": "50px",
        "paddingRight": "50px"
      },
      "callbacks": {}
    },
    "Div162": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox92": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "42px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "marginBottom": "40px",
        "lineHeight": "50px"
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "25px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "borderRadius": "2px",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "lineHeight": "60px",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#00000080"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your email",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox94": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "",
        "fontWeight": 700,
        "fontSize": "32px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "fontSize": "26px",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "color": "#524b4b",
        "lineHeight": "40px",
        "marginBottom": "80px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "lineHeight": "50px",
        "marginBottom": "40px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexWrap": "wrap"
      },
      "callbacks": {}
    },
    "Div171": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "TextBox97": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div174": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "TextBox109": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div175": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexGrow": null,
        "flexShrink": null,
        "width": "px",
        "alignItems": "stretch",
        "justifyContent": "space-around",
        "alignContent": "space-around",
        "alignSelf": "auto"
      },
      "callbacks": {}
    },
    "Div177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginRight": "30px",
        "width": "30vw"
      },
      "callbacks": {}
    },
    "Div178": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "paddingRight": "0px",
        "marginRight": "30px"
      },
      "callbacks": {}
    },
    "Div179": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "15vw"
      },
      "callbacks": {}
    },
    "TextBox125": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "",
        "fontWeight": 700,
        "fontSize": "18px",
        "marginTop": "30px"
      },
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input2": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "4px",
        "paddingLeft": "11px",
        "paddingBottom": "4px",
        "paddingRight": "11px",
        "color": "#000000d9",
        "fontSize": "18px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "",
        "borderStyle": "none",
        "borderColor": "",
        "borderRadius": "2px",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "lineHeight": "60px",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#00000080"
      },
      "custom": {
        "value": "",
        "placeholder": "Enter your email",
        "isPasswordField": false
      },
      "callbacks": {}
    },
    "TextBox126": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "wordWrap": "break-word",
        "fontSize": "18px",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "color": "#524b4b",
        "lineHeight": "40px",
        "marginBottom": "80px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet tragon consectetur adipiscing elit mattis faucibus odio feugiat arcu scelerisque"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontSize": "32px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "marginBottom": "40px",
        "lineHeight": "50px"
      },
      "custom": {
        "text": "Webfolio X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div180": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div181": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div182": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div183": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "width": ""
      },
      "callbacks": {}
    },
    "TextBox129": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div184": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Div185": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Div186": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "25px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexWrap": "nowrap"
      },
      "callbacks": {}
    },
    "TextBox147": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "lineHeight": "50px",
        "marginBottom": "40px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "30px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "lineHeight": "50px",
        "fontSize": "24px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "marginBottom": "40px"
      },
      "custom": {
        "text": "Utility Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Start Here"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "404 Not Found"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Licenses"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Changelog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Password Protected"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div189": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "20px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "TextBox155": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 700,
        "fontSize": "18px",
        "lineHeight": "40px",
        "width": "205px",
        "borderBottomWidth": "4px",
        "borderBottomStyle": "solid"
      },
      "custom": {
        "text": "More Templates"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div190": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox156": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Portfolio"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Past Clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Case Study"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Shop"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "Product"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Blog V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": "About V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "About V2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px"
      },
      "custom": {
        "text": "Home V3"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginBottom": "20px",
        "wordWrap": "normal"
      },
      "custom": {
        "text": "Home V1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div191": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "20px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Div192": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "20px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Div193": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 400,
        "fontSize": "20px",
        "paddingLeft": "",
        "marginRight": "20px"
      },
      "callbacks": {}
    },
    "Flex49": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexWrap": "nowrap",
        "fontSize": ""
      },
      "callbacks": {}
    },
    "TextBox174": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "lineHeight": "50px",
        "marginBottom": "40px",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div194": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div195": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "flexWrap": "nowrap",
        "width": "30vw"
      },
      "callbacks": {}
    },
    "Div196": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "marginTop": "90px",
        "marginBottom": "30px"
      },
      "callbacks": {}
    },
    "Div198": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "width": "80%",
        "height": "auto",
        "borderBottomWidth": "2px",
        "borderBottomStyle": "solid",
        "borderBottomColor": "#474343cc"
      },
      "callbacks": {}
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "width": "100%",
        "height": "auto",
        "alignContent": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "Flex52": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px ",
        "alignContent": "space-between",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Div199": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Div200": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "TextBox175": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "fontFamily": "Open Sans",
        "fontWeight": 300,
        "fontSize": "15px"
      },
      "custom": {
        "text": "Copyright © Webfolio X | Designed by BRIX Templates - Powered by Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div201": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Flex53": {
      "styles": {
        "display": "flex",
        "boxShadow": "0px 00px 0px 0px "
      },
      "callbacks": {}
    },
    "Image25": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px ",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screenshot%202022-10-11%20204640.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div202": {
      "styles": {
        "boxShadow": "4px 4px 6px 2px #000000ff",
        "width": "110px",
        "position": "fixed",
        "right": 20,
        "bottom": 25,
        "left": null,
        "top": null,
        "zIndex": 10
      },
      "callbacks": {}
    },
    "TextBox177": {
      "styles": {
        "boxShadow": "0px 00px 0px 0px #000000ff",
        "fontFamily": "Open Sans",
        "fontWeight": 600,
        "fontSize": "13px"
      },
      "custom": {
        "text": "Made in Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
