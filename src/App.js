import "./App.css";
import Blue from "./Images/Blue.png";
import Red from "./Images/Red.png";
import None from "./Images/None.png";
import green from "./Images/green.png";
import lightgreen from "./Images/lightgreen.png";

import React, { useState, useEffect } from "react";

function App() {
  //Game States
  const [playerStatus, setPlayerStatus] = useState(0);
  const [roundColor, setRoundColor] = useState(None);
  const [roundStatus, setRoundStatus] = useState(1);
  const [victor, setVictor] = useState(0);
  const [playerController, setPlayerController] = useState(1);
  const [seeButton, setSeeButton] = useState(1);

  //States for  status of pieces
  const [hasPiece1, setHasPiece1] = useState(false);
  const [imageColor1, setImageColor1] = useState(None);
  const [clickStatus1, setClickStatus1] = useState(false);
  const [hasMilled1, setHasMilled1] = useState(false);

  const [hasPiece2, setHasPiece2] = useState(false);
  const [imageColor2, setImageColor2] = useState(None);
  const [clickStatus2, setClickStatus2] = useState(false);
  const [hasMilled2, setHasMilled2] = useState(false);

  const [hasPiece3, setHasPiece3] = useState(false);
  const [imageColor3, setImageColor3] = useState(None);
  const [clickStatus3, setClickStatus3] = useState(false);
  const [hasMilled3, setHasMilled3] = useState(false);

  const [hasPiece4, setHasPiece4] = useState(false);
  const [imageColor4, setImageColor4] = useState(None);
  const [clickStatus4, setClickStatus4] = useState(false);
  const [hasMilled4, setHasMilled4] = useState(false);

  const [hasPiece5, setHasPiece5] = useState(false);
  const [imageColor5, setImageColor5] = useState(None);
  const [clickStatus5, setClickStatus5] = useState(false);
  const [hasMilled5, setHasMilled5] = useState(false);

  const [hasPiece6, setHasPiece6] = useState(false);
  const [imageColor6, setImageColor6] = useState(None);
  const [clickStatus6, setClickStatus6] = useState(false);
  const [hasMilled6, setHasMilled6] = useState(false);

  const [hasPiece7, setHasPiece7] = useState(false);
  const [imageColor7, setImageColor7] = useState(None);
  const [clickStatus7, setClickStatus7] = useState(false);
  const [hasMilled7, setHasMilled7] = useState(false);

  const [hasPiece8, setHasPiece8] = useState(false);
  const [imageColor8, setImageColor8] = useState(None);
  const [clickStatus8, setClickStatus8] = useState(false);
  const [hasMilled8, setHasMilled8] = useState(false);

  const [hasPiece9, setHasPiece9] = useState(false);
  const [imageColor9, setImageColor9] = useState(None);
  const [clickStatus9, setClickStatus9] = useState(false);
  const [hasMilled9, setHasMilled9] = useState(false);

  const [hasPiece10, setHasPiece10] = useState(false);
  const [imageColor10, setImageColor10] = useState(None);
  const [clickStatus10, setClickStatus10] = useState(false);
  const [hasMilled10, setHasMilled10] = useState(false);

  const [hasPiece11, setHasPiece11] = useState(false);
  const [imageColor11, setImageColor11] = useState(None);
  const [clickStatus11, setClickStatus11] = useState(false);
  const [hasMilled11, setHasMilled11] = useState(false);

  const [hasPiece12, setHasPiece12] = useState(false);
  const [imageColor12, setImageColor12] = useState(None);
  const [clickStatus12, setClickStatus12] = useState(false);
  const [hasMilled12, setHasMilled12] = useState(false);

  const [hasPiece13, setHasPiece13] = useState(false);
  const [imageColor13, setImageColor13] = useState(None);
  const [clickStatus13, setClickStatus13] = useState(false);
  const [hasMilled13, setHasMilled13] = useState(false);

  const [hasPiece14, setHasPiece14] = useState(false);
  const [imageColor14, setImageColor14] = useState(None);
  const [clickStatus14, setClickStatus14] = useState(false);
  const [hasMilled14, setHasMilled14] = useState(false);

  const [hasPiece15, setHasPiece15] = useState(false);
  const [imageColor15, setImageColor15] = useState(None);
  const [clickStatus15, setClickStatus15] = useState(false);
  const [hasMilled15, setHasMilled15] = useState(false);

  const [hasPiece16, setHasPiece16] = useState(false);
  const [imageColor16, setImageColor16] = useState(None);
  const [clickStatus16, setClickStatus16] = useState(false);
  const [hasMilled16, setHasMilled16] = useState(false);

  const [hasPiece17, setHasPiece17] = useState(false);
  const [imageColor17, setImageColor17] = useState(None);
  const [clickStatus17, setClickStatus17] = useState(false);

  const [hasPiece18, setHasPiece18] = useState(false);
  const [imageColor18, setImageColor18] = useState(None);
  const [clickStatus18, setClickStatus18] = useState(false);

  const [hasPiece19, setHasPiece19] = useState(false);
  const [imageColor19, setImageColor19] = useState(None);
  const [clickStatus19, setClickStatus19] = useState(false);

  const [hasPiece20, setHasPiece20] = useState(false);
  const [imageColor20, setImageColor20] = useState(None);
  const [clickStatus20, setClickStatus20] = useState(false);

  const [hasPiece21, setHasPiece21] = useState(false);
  const [imageColor21, setImageColor21] = useState(None);
  const [clickStatus21, setClickStatus21] = useState(false);

  const [hasPiece22, setHasPiece22] = useState(false);
  const [imageColor22, setImageColor22] = useState(None);
  const [clickStatus22, setClickStatus22] = useState(false);

  const [hasPiece23, setHasPiece23] = useState(false);
  const [imageColor23, setImageColor23] = useState(None);
  const [clickStatus23, setClickStatus23] = useState(false);

  const [hasPiece24, setHasPiece24] = useState(false);
  const [imageColor24, setImageColor24] = useState(None);
  const [clickStatus24, setClickStatus24] = useState(false);

  const [millStatus, setMillStatus] = useState(false);
  const [millColor, setMillColor] = useState("None");

  const [tableColor, setTableColor] = useState("#bac7e0");

  const [redRemoved, setRedRemoved] = useState(0);
  const [blueRemoved, setBlueRemoved] = useState(0);

  //2 neighbors
  const MillChecker = () => {
    if (
      imageColor1 === imageColor10 &&
      imageColor22 === imageColor10 &&
      imageColor10 !== None &&
      hasMilled1 === false
    ) {
      setMillColor(imageColor10);
      setMillStatus(true);
      setHasMilled1(true);
      setClickStatus1(false);
      setClickStatus10(false);
      setClickStatus22(false);
      setTableColor("yellow");
    }
    if (
      imageColor7 === imageColor12 &&
      imageColor16 === imageColor12 &&
      imageColor12 !== None &&
      hasMilled2 === false
    ) {
      setMillColor(imageColor12);
      setHasMilled2(true);

      setMillStatus(true);
      setClickStatus7(false);
      setClickStatus16(false);
      setClickStatus12(false);
      setTableColor("yellow");
    }
    if (
      imageColor1 === imageColor2 &&
      imageColor3 === imageColor2 &&
      imageColor2 !== None &&
      hasMilled3 === false
    ) {
      setMillColor(imageColor2);
      setMillStatus(true);
      setTableColor("yellow");
      setClickStatus1(false);
      setClickStatus3(false);
      setClickStatus2(false);
      setHasMilled3(true);
    }
    if (
      imageColor22 === imageColor23 &&
      imageColor24 === imageColor23 &&
      imageColor23 !== None &&
      hasMilled4 === false
    ) {
      setMillColor(imageColor23);
      setMillStatus(true);
      setTableColor("yellow");
      setClickStatus22(false);
      setClickStatus24(false);
      setClickStatus23(false);
      setHasMilled4(true);
    }
    if (
      imageColor7 === imageColor8 &&
      imageColor9 === imageColor8 &&
      imageColor8 !== None &&
      hasMilled5 === false
    ) {
      setMillColor(imageColor8);
      setMillStatus(true);
      setTableColor("yellow");
      setClickStatus7(false);
      setClickStatus9(false);
      setClickStatus8(false);
      setHasMilled5(true);
    }
    if (
      imageColor16 === imageColor17 &&
      imageColor18 === imageColor17 &&
      imageColor17 !== None &&
      hasMilled6 === false
    ) {
      setMillColor(imageColor17);
      setMillStatus(true);
      setTableColor("yellow");
      setClickStatus16(false);
      setClickStatus18(false);
      setClickStatus17(false);
      setHasMilled6(true);
    }
    if (
      imageColor9 === imageColor13 &&
      imageColor18 === imageColor13 &&
      imageColor13 !== None &&
      hasMilled7 === false
    ) {
      setMillColor(imageColor13);
      setMillStatus(true);
      setHasMilled7(true);
      setClickStatus9(false);
      setClickStatus18(false);
      setClickStatus13(false);
      setTableColor("yellow");
    }
    if (
      imageColor2 === imageColor5 &&
      imageColor8 === imageColor5 &&
      hasMilled8 === false &&
      imageColor5 !== None
    ) {
      setMillColor(imageColor5);
      setMillStatus(true);
      setHasMilled8(true);
      setClickStatus2(false);
      setClickStatus8(false);
      setClickStatus5(false);
      setTableColor("yellow");
    }
    if (
      imageColor4 === imageColor5 &&
      imageColor6 === imageColor5 &&
      hasMilled9 === false &&
      imageColor5 !== None
    ) {
      setMillColor(imageColor5);
      setMillStatus(true);
      setHasMilled9(true);
      setClickStatus4(false);
      setClickStatus9(false);
      setClickStatus6(false);
      setTableColor("yellow");
    }
    if (
      imageColor19 === imageColor20 &&
      imageColor21 === imageColor20 &&
      hasMilled10 === false &&
      imageColor20 !== None
    ) {
      setMillColor(imageColor20);
      setHasMilled10(true);
      setMillStatus(true);
      setClickStatus19(false);
      setClickStatus21(false);
      setClickStatus20(false);
      setTableColor("yellow");
    }
    if (
      imageColor17 === imageColor20 &&
      imageColor23 === imageColor20 &&
      hasMilled11 === false &&
      imageColor20 !== None
    ) {
      setMillColor(imageColor20);
      setHasMilled11(true);
      setMillStatus(true);
      setClickStatus17(false);
      setClickStatus23(false);
      setClickStatus20(false);
      setTableColor("yellow");
    }
    if (
      imageColor13 === imageColor14 &&
      imageColor15 === imageColor14 &&
      hasMilled12 === false &&
      imageColor14 !== None
    ) {
      setMillColor(imageColor14);
      setHasMilled12(true);
      setMillStatus(true);
      setClickStatus13(false);
      setClickStatus15(false);
      setClickStatus14(false);
      setTableColor("yellow");
    }
    if (
      imageColor6 === imageColor14 &&
      imageColor21 === imageColor14 &&
      hasMilled13 === false &&
      imageColor14 !== None
    ) {
      setMillColor(imageColor14);
      setHasMilled13(true);
      setMillStatus(true);
      setClickStatus6(false);
      setClickStatus21(false);
      setClickStatus14(false);
      setTableColor("yellow");
    }
    if (
      imageColor3 === imageColor15 &&
      imageColor24 === imageColor15 &&
      imageColor15 !== None &&
      hasMilled14 === false
    ) {
      setMillColor(imageColor15);
      setHasMilled14(true);
      setMillStatus(true);
      setClickStatus3(false);
      setClickStatus15(false);
      setClickStatus24(false);
      setTableColor("yellow");
    }
    if (
      imageColor10 === imageColor11 &&
      imageColor12 === imageColor11 &&
      hasMilled15 === false &&
      imageColor11 !== None
    ) {
      setMillColor(imageColor11);
      setHasMilled15(true);
      setMillStatus(true);
      setClickStatus10(false);
      setClickStatus11(false);
      setClickStatus12(false);
      setTableColor("yellow");
    }
    if (
      imageColor4 === imageColor11 &&
      imageColor19 === imageColor11 &&
      hasMilled16 === false &&
      imageColor11 !== None
    ) {
      setMillColor(imageColor11);
      setHasMilled16(true);
      setMillStatus(true);
      setClickStatus4(false);
      setClickStatus11(false);
      setClickStatus19(false);
      setTableColor("yellow");
    }

    //mill checker positions: 10 12 2 23 8 17 13 5 20 14 15 11
  };
  const EndChecker = () => {
    if (redRemoved === 7) {
      setVictor("Blue");
      console.log(victor);
    }
    if (blueRemoved === 7) {
      setVictor("Red");
      console.log(victor);
    }
  };
  useEffect(() => {
    MillChecker();
    EndChecker();
    console.log("Mill status: " + millStatus);
  });

  const Plate1 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    //mill behavior
    if (
      millStatus === true &&
      hasMilled1 === false &&
      hasMilled3 === false &&
      clickStatus1 === true &&
      roundColor === imageColor1 &&
      imageColor1 !== (millColor && None)
    ) {
      if (imageColor1 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor1 === Blue) {
        setRedRemoved(redRemoved + 1);
      }
      console.log("Mill detected1");
      setHasPiece1(false);
      setImageColor1(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus1(false);
    }
    //round 1 behavior
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus1(true);
        if (
          millStatus === true &&
          (imageColor1 === millColor || imageColor1 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece1 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor1(Blue);
          setClickStatus1(false);
        } else if (playerStatus % 2 === 1 && hasPiece1 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor1(Red);
          setClickStatus1(false);
        }

        setHasPiece1(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor1}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus1(true);

        if (imageColor1 === None) {
        } else if (imageColor1 === lightgreen) {
          setImageColor1(green);
        } else if (imageColor2 === green) {
          setImageColor2(None);
        } else if (
          imageColor2 === None &&
          millStatus === false &&
          imageColor1 !== (green || lightgreen)
        ) {
          setImageColor2(green);
        } else if (imageColor1 === green) {
          setImageColor1(lightgreen);
        }

        if (imageColor1 === None) {
        } else if (imageColor1 === lightgreen) {
          setImageColor1(green);
        } else if (imageColor10 === green) {
          setImageColor10(None);
        } else if (
          imageColor10 === None &&
          millStatus === false &&
          imageColor1 !== (green || lightgreen)
        ) {
          setImageColor10(green);
        } else if (imageColor1 === green) {
          setImageColor1(lightgreen);
        }
        if (roundColor === imageColor1) {
          if (
            millStatus === true &&
            (imageColor1 === millColor || imageColor1 === None)
          ) {
          } else if (
            hasPiece2 === false &&
            clickStatus2 === true &&
            imageColor1 !== None &&
            imageColor2 === lightgreen
          ) {
            setImageColor2(imageColor1);
            setImageColor1(None);
            setHasPiece1(false);
            setHasPiece2(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled3(false);
            setClickStatus1(false);
            setClickStatus2(false);
          } else if (
            hasPiece10 === false &&
            clickStatus10 === true &&
            imageColor1 !== None &&
            imageColor10 === lightgreen
          ) {
            setImageColor10(imageColor1);
            setImageColor1(None);
            setHasPiece1(false);
            setHasPiece10(true);
            setHasMilled1(false);
            setHasMilled3(false);
            setPlayerStatus(playerStatus + 1);
            setClickStatus1(false);
            setClickStatus10(false);
          }

          if (imageColor2 === lightgreen && imageColor10 === lightgreen) {
            setImageColor2(None);

            setImageColor1(imageColor1);
            setImageColor10(None);

            setClickStatus2(false);
            setClickStatus10(false);
            setHasPiece10(false);
            setHasPiece2(false);
          }
        } else {
        }
      };

      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor1}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };

  //3 neighbors
  const Plate2 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      (imageColor2 === millColor || imageColor2 === None)
    ) {
    } else if (
      millStatus === true &&
      clickStatus2 === true &&
      hasMilled3 === false &&
      hasMilled8 === false &&
      roundColor === imageColor2 &&
      imageColor2 !== (millColor && None)
    ) {
      if (imageColor2 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor2 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected2");
      setHasPiece2(false);
      setImageColor2(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus2(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus2(true);
        if (
          millStatus === true &&
          (imageColor2 === millColor || imageColor2 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece2 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor2(Blue);
          setClickStatus2(false);
        } else if (playerStatus % 2 === 1 && hasPiece2 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor2(Red);
          setClickStatus2(false);
        }
        setHasPiece2(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor2}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus2(true);

        if (imageColor2 === None) {
        } else if (imageColor2 === lightgreen) {
          setImageColor2(green);
        } else if (imageColor1 === green) {
          setImageColor1(None);
        } else if (
          imageColor1 === None &&
          millStatus === false &&
          imageColor2 !== (green || lightgreen)
        ) {
          setImageColor1(green);
        } else if (imageColor2 === green) {
          setImageColor2(lightgreen);
        }

        if (imageColor2 === None) {
        } else if (imageColor2 === lightgreen) {
          setImageColor2(green);
        } else if (imageColor3 === green) {
          setImageColor3(None);
        } else if (
          imageColor3 === None &&
          millStatus === false &&
          imageColor2 !== (green || lightgreen)
        ) {
          setImageColor3(green);
        } else if (imageColor2 === green) {
          setImageColor2(lightgreen);
        }

        if (imageColor2 === None) {
        } else if (imageColor2 === lightgreen) {
          setImageColor2(green);
        } else if (imageColor5 === green) {
          setImageColor5(None);
        } else if (
          imageColor5 === None &&
          millStatus === false &&
          imageColor2 !== (green || lightgreen)
        ) {
          setImageColor5(green);
        } else if (imageColor2 === green) {
          setImageColor2(lightgreen);
        }
        if (roundColor === imageColor2) {
          if (
            millStatus === true &&
            (imageColor2 === millColor || imageColor2 === None)
          ) {
          } else if (
            hasPiece1 === false &&
            clickStatus1 === true &&
            imageColor2 !== None &&
            imageColor1 === lightgreen
          ) {
            setImageColor1(imageColor2);
            setImageColor2(None);
            setHasPiece2(false);
            setHasPiece1(true);
            setHasMilled8(false);
            setHasMilled3(false);
            setPlayerStatus(playerStatus + 1);
            setClickStatus2(false);
            setClickStatus1(false);
          } else if (
            hasPiece3 === false &&
            clickStatus3 === true &&
            imageColor2 !== None &&
            imageColor3 === lightgreen
          ) {
            setImageColor3(imageColor2);
            setImageColor2(None);
            setHasPiece2(false);
            setHasPiece3(true);
            setHasMilled8(false);
            setHasMilled3(false);
            setPlayerStatus(playerStatus + 1);
            setClickStatus2(false);
            setClickStatus3(false);
          } else if (
            hasPiece5 === false &&
            clickStatus5 === true &&
            imageColor2 !== None &&
            imageColor5 === lightgreen
          ) {
            setImageColor5(imageColor2);
            setImageColor2(None);
            setHasPiece2(false);
            setHasPiece5(true);
            setHasMilled8(false);
            setHasMilled3(false);
            setPlayerStatus(playerStatus + 1);
            setClickStatus2(false);
            setClickStatus5(false);
          }

          if (
            imageColor5 === lightgreen &&
            imageColor1 === lightgreen &&
            imageColor3 === lightgreen
          ) {
            setImageColor5(None);
            setImageColor2(imageColor2);
            setImageColor1(None);
            setImageColor3(None);

            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus1(false);
            setHasPiece1(false);
          } else if (imageColor5 === lightgreen && imageColor1 === lightgreen) {
            setImageColor5(None);
            setImageColor2(imageColor2);
            setImageColor1(None);
            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus1(false);
            setHasPiece1(false);
          } else if (imageColor5 === lightgreen && imageColor3 === lightgreen) {
            setImageColor5(None);
            setImageColor2(imageColor2);
            setImageColor3(None);
            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus3(false);
            setHasPiece3(false);
          } else if (imageColor1 === lightgreen && imageColor3 === lightgreen) {
            setImageColor3(None);
            setImageColor2(imageColor2);
            setImageColor1(None);
            setClickStatus1(false);
            setHasPiece1(false);
            setClickStatus3(false);
            setHasPiece3(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor2}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate3 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus3 === true &&
      hasMilled3 === false &&
      hasMilled14 === false &&
      roundColor === imageColor3 &&
      imageColor3 !== (millColor && None)
    ) {
      if (imageColor3 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor3 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected3");
      setHasPiece3(false);
      setImageColor3(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus3(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus3(true);
        if (
          millStatus === true &&
          (imageColor3 === millColor || imageColor3 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece3 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor3(Blue);
          setClickStatus3(false);
        } else if (playerStatus % 2 === 1 && hasPiece3 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor3(Red);
          setClickStatus3(false);
        }
        setHasPiece3(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor3}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus3(true);

        if (imageColor3 === None) {
        } else if (imageColor3 === lightgreen) {
          setImageColor3(green);
        } else if (imageColor2 === green) {
          setImageColor2(None);
        } else if (
          imageColor2 === None &&
          millStatus === false &&
          imageColor3 !== (green || lightgreen)
        ) {
          setImageColor2(green);
        } else if (imageColor3 === green) {
          setImageColor3(lightgreen);
        }

        if (imageColor3 === None) {
        } else if (imageColor3 === lightgreen) {
          setImageColor3(green);
        } else if (imageColor15 === green) {
          setImageColor15(None);
        } else if (
          imageColor15 === None &&
          millStatus === false &&
          imageColor3 !== (green || lightgreen)
        ) {
          setImageColor15(green);
        } else if (imageColor3 === green) {
          setImageColor3(lightgreen);
        }
        if (roundColor === imageColor3) {
          if (
            millStatus === true &&
            (imageColor3 === millColor || imageColor3 === None)
          ) {
          } else if (
            hasPiece2 === false &&
            clickStatus2 === true &&
            imageColor3 !== None &&
            imageColor2 === lightgreen
          ) {
            setImageColor2(imageColor3);
            setImageColor3(None);
            setHasPiece3(false);
            setHasPiece2(true);
            setHasMilled14(false);
            setHasMilled3(false);
            setPlayerStatus(playerStatus + 1);
            setClickStatus3(false);
            setClickStatus2(false);
          } else if (
            hasPiece15 === false &&
            clickStatus15 === true &&
            imageColor3 !== None &&
            imageColor15 === lightgreen
          ) {
            setImageColor15(imageColor3);
            setImageColor3(None);
            setHasPiece3(false);
            setHasMilled14(false);
            setHasMilled3(false);
            setHasPiece15(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus3(false);
            setClickStatus15(false);
          }

          if (imageColor2 === lightgreen && imageColor15 === lightgreen) {
            setImageColor15(None);
            setImageColor3(imageColor3);
            setImageColor2(None);

            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus2(false);
            setHasPiece2(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor3}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate4 = (props) => {
    if (
      millStatus === true &&
      clickStatus4 === true &&
      hasMilled9 === false &&
      hasMilled16 === false &&
      roundColor === imageColor4 &&
      imageColor4 !== (millColor && None)
    ) {
      if (imageColor4 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor4 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected4");
      setHasPiece4(false);
      setImageColor4(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus4(false);
    }
    //mill behavior
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus4(true);
        if (
          millStatus === true &&
          (imageColor4 === millColor || imageColor4 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece4 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor4(Blue);
          setClickStatus4(false);
        } else if (playerStatus % 2 === 1 && hasPiece4 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor4(Red);
          setClickStatus4(false);
        }
        setHasPiece4(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor4}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus4(true);

        if (imageColor4 === None) {
        } else if (imageColor4 === lightgreen) {
          setImageColor4(green);
        } else if (imageColor5 === green) {
          setImageColor5(None);
        } else if (
          imageColor5 === None &&
          millStatus === false &&
          imageColor4 !== (green || lightgreen)
        ) {
          setImageColor5(green);
        } else if (imageColor4 === green) {
          setImageColor4(lightgreen);
        }

        if (imageColor4 === None) {
        } else if (imageColor4 === lightgreen) {
          setImageColor4(green);
        } else if (imageColor11 === green) {
          setImageColor11(None);
        } else if (
          imageColor11 === None &&
          millStatus === false &&
          imageColor4 !== (green || lightgreen)
        ) {
          setImageColor11(green);
        } else if (imageColor4 === green) {
          setImageColor4(lightgreen);
        }
        if (roundColor === imageColor4) {
          if (
            millStatus === true &&
            (imageColor4 === millColor || imageColor4 === None)
          ) {
          } else if (
            hasPiece5 === false &&
            clickStatus5 === true &&
            imageColor4 !== None &&
            imageColor5 === lightgreen
          ) {
            setImageColor5(imageColor4);
            setImageColor4(None);
            setHasPiece4(false);
            setHasMilled16(false);
            setHasMilled9(false);
            setHasPiece5(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus4(false);
            setClickStatus5(false);
          } else if (
            hasPiece11 === false &&
            clickStatus11 === true &&
            imageColor4 !== None &&
            imageColor11 === lightgreen
          ) {
            setImageColor11(imageColor4);
            setImageColor4(None);
            setHasPiece4(false);
            setHasMilled16(false);
            setHasMilled9(false);
            setHasPiece11(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus4(false);
            setClickStatus11(false);
          }
          if (imageColor5 === lightgreen && imageColor11 === lightgreen) {
            setImageColor5(None);
            setImageColor4(imageColor4);
            setImageColor11(None);

            setClickStatus5(false);
            setHasPiece5(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor4}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };

  //4 neighbors
  const Plate5 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus5 === true &&
      hasMilled8 === false &&
      hasMilled9 === false &&
      roundColor === imageColor5 &&
      imageColor5 !== (millColor && None)
    ) {
      if (imageColor5 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor5 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected5");
      setHasPiece5(false);
      setImageColor5(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus5(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus5(true);
        if (
          millStatus === true &&
          (imageColor5 === millColor || imageColor5 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece5 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor5(Blue);
          setClickStatus5(false);
        } else if (playerStatus % 2 === 1 && hasPiece5 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor5(Red);
          setClickStatus5(false);
        }
        setHasPiece5(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor5}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus5(true);

        if (imageColor5 === None) {
        } else if (imageColor5 === lightgreen) {
          setImageColor5(green);
        } else if (imageColor4 === green) {
          setImageColor4(None);
        } else if (
          imageColor4 === None &&
          millStatus === false &&
          imageColor5 !== (green || lightgreen)
        ) {
          setImageColor4(green);
        } else if (imageColor5 === green) {
          setImageColor5(lightgreen);
        }

        if (imageColor5 === None) {
        } else if (imageColor5 === lightgreen) {
          setImageColor5(green);
        } else if (imageColor2 === green) {
          setImageColor2(None);
        } else if (
          imageColor2 === None &&
          millStatus === false &&
          imageColor5 !== (green || lightgreen)
        ) {
          setImageColor2(green);
        } else if (imageColor5 === green) {
          setImageColor5(lightgreen);
        }

        if (imageColor5 === None) {
        } else if (imageColor5 === lightgreen) {
          setImageColor5(green);
        } else if (imageColor8 === green) {
          setImageColor8(None);
        } else if (
          imageColor8 === None &&
          millStatus === false &&
          imageColor5 !== (green || lightgreen)
        ) {
          setImageColor8(green);
        } else if (imageColor5 === green) {
          setImageColor5(lightgreen);
        }
        if (imageColor5 === None) {
        } else if (imageColor5 === lightgreen) {
          setImageColor5(green);
        } else if (imageColor6 === green) {
          setImageColor6(None);
        } else if (
          imageColor6 === None &&
          millStatus === false &&
          imageColor5 !== (green || lightgreen)
        ) {
          setImageColor6(green);
        } else if (imageColor5 === green) {
          setImageColor5(lightgreen);
        }
        if (roundColor === imageColor5) {
          if (
            millStatus === true &&
            (imageColor5 === millColor || imageColor5 === None)
          ) {
          } else if (
            hasPiece4 === false &&
            clickStatus4 === true &&
            imageColor5 !== None &&
            imageColor4 === lightgreen
          ) {
            setImageColor4(imageColor5);
            setImageColor5(None);
            setHasPiece5(false);
            setHasMilled8(false);
            setHasMilled9(false);
            setHasPiece4(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus5(false);
            setClickStatus4(false);
          } else if (
            hasPiece2 === false &&
            clickStatus2 === true &&
            imageColor5 !== None &&
            imageColor2 === lightgreen
          ) {
            setImageColor2(imageColor5);
            setImageColor5(None);
            setHasPiece5(false);
            setHasMilled8(false);
            setHasMilled9(false);
            setHasPiece2(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus5(false);
            setClickStatus2(false);
          } else if (
            hasPiece8 === false &&
            clickStatus8 === true &&
            imageColor5 !== None &&
            imageColor8 === lightgreen
          ) {
            setImageColor8(imageColor5);
            setImageColor5(None);
            setHasPiece5(false);
            setHasMilled8(false);
            setHasMilled9(false);
            setHasPiece8(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus5(false);
            setClickStatus8(false);
          } else if (
            hasPiece6 === false &&
            clickStatus6 === true &&
            imageColor5 !== None &&
            imageColor6 === lightgreen
          ) {
            setImageColor6(imageColor5);
            setImageColor5(None);
            setHasPiece5(false);
            setHasMilled8(false);
            setHasMilled9(false);
            setHasPiece6(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus5(false);
            setClickStatus6(false);
          }

          if (
            imageColor4 === lightgreen &&
            imageColor2 === lightgreen &&
            imageColor8 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor2(None);
            setImageColor8(None);
            setImageColor6(None);

            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus2(false);
            setHasPiece2(false);
            setClickStatus8(false);
            setHasPiece8(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor2 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor2(None);
            setImageColor6(None);

            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus2(false);
            setHasPiece2(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor8 === lightgreen &&
            imageColor2 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor8(None);
            setImageColor5(imageColor5);
            setImageColor2(None);
            setImageColor6(None);
            setClickStatus2(false);
            setHasPiece2(false);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus8(false);
            setHasPiece8(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor2 === lightgreen &&
            imageColor8 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor2(None);
            setImageColor8(None);
            setClickStatus2(false);
            setHasPiece2(false);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus8(false);
            setHasPiece8(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor6 === lightgreen &&
            imageColor8 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor6(None);
            setImageColor8(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus8(false);
            setHasPiece8(false);
          } else if (imageColor4 === lightgreen && imageColor2 === lightgreen) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor2(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus2(false);
            setHasPiece2(false);
          } else if (imageColor4 === lightgreen && imageColor8 === lightgreen) {
            setImageColor4(None);
            setImageColor5(imageColor5);
            setImageColor8(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus8(false);
            setHasPiece8(false);
          } else if (imageColor2 === lightgreen && imageColor8 === lightgreen) {
            setImageColor2(None);
            setImageColor5(imageColor5);
            setImageColor8(None);
            setClickStatus2(false);
            setHasPiece2(false);
            setClickStatus8(false);
            setHasPiece8(false);
          } else if (imageColor2 === lightgreen && imageColor6 === lightgreen) {
            setImageColor2(None);
            setImageColor5(imageColor5);
            setImageColor6(None);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus2(false);
            setHasPiece2(false);
          } else if (imageColor6 === lightgreen && imageColor4 === lightgreen) {
            setImageColor6(None);
            setImageColor5(imageColor5);
            setImageColor4(None);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus4(false);
            setHasPiece4(false);
          } else if (imageColor6 === lightgreen && imageColor8 === lightgreen) {
            setImageColor6(None);
            setImageColor5(imageColor5);
            setImageColor8(None);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus8(false);
            setHasPiece8(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor5}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate6 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)

    if (
      millStatus === true &&
      clickStatus6 === true &&
      hasMilled9 === false &&
      hasMilled13 === false &&
      roundColor === imageColor6 &&
      imageColor6 !== (millColor && None)
    ) {
      if (imageColor6 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor6 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected6");
      setHasPiece6(false);
      setImageColor6(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus6(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus6(true);
        if (
          millStatus === true &&
          (imageColor6 === millColor || imageColor6 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece6 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor6(Blue);
          setClickStatus6(false);
        } else if (playerStatus % 2 === 1 && hasPiece6 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor6(Red);
          setClickStatus6(false);
        }
        setHasPiece6(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor6}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus6(true);

        if (imageColor6 === None) {
        } else if (imageColor6 === lightgreen) {
          setImageColor6(green);
        } else if (imageColor5 === green) {
          setImageColor5(None);
        } else if (
          imageColor5 === None &&
          millStatus === false &&
          imageColor6 !== (green || lightgreen)
        ) {
          setImageColor5(green);
        } else if (imageColor6 === green) {
          setImageColor6(lightgreen);
        }

        if (imageColor6 === None) {
        } else if (imageColor6 === lightgreen) {
          setImageColor6(green);
        } else if (imageColor14 === green) {
          setImageColor14(None);
        } else if (
          imageColor14 === None &&
          millStatus === false &&
          imageColor6 !== (green || lightgreen)
        ) {
          setImageColor14(green);
        } else if (imageColor6 === green) {
          setImageColor6(lightgreen);
        }
        if (roundColor === imageColor6) {
          if (
            millStatus === true &&
            (imageColor6 === millColor || imageColor6 === None)
          ) {
          } else if (
            hasPiece5 === false &&
            clickStatus5 === true &&
            imageColor6 !== None &&
            imageColor5 === lightgreen
          ) {
            setImageColor5(imageColor6);
            setImageColor6(None);
            setHasPiece6(false);
            setHasMilled13(false);
            setHasMilled9(false);
            setHasPiece5(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus6(false);
            setClickStatus5(false);
          } else if (
            hasPiece14 === false &&
            clickStatus14 === true &&
            imageColor6 !== None &&
            imageColor14 === lightgreen
          ) {
            setImageColor14(imageColor6);
            setImageColor6(None);
            setHasPiece6(false);
            setHasMilled13(false);
            setHasMilled9(false);
            setHasPiece14(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus6(false);
            setClickStatus14(false);
          }
          if (imageColor5 === lightgreen && imageColor14 === lightgreen) {
            setImageColor5(None);
            setImageColor6(imageColor6);
            setImageColor14(None);
            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus14(false);
            setHasPiece14(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor6}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate7 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)

    if (
      millStatus === true &&
      clickStatus7 === true &&
      hasMilled2 === false &&
      hasMilled5 === false &&
      roundColor === imageColor7 &&
      imageColor7 !== (millColor && None)
    ) {
      if (imageColor7 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor7 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected7");
      setHasPiece7(false);
      setImageColor7(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus7(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus7(true);
        if (
          millStatus === true &&
          (imageColor7 === millColor || imageColor7 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece7 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor7(Blue);
          setClickStatus7(false);
        } else if (playerStatus % 2 === 1 && hasPiece7 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor7(Red);
          setClickStatus7(false);
        }
        setHasPiece7(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor7}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus7(true);

        if (imageColor7 === None) {
        } else if (imageColor7 === lightgreen) {
          setImageColor7(green);
        } else if (imageColor12 === green) {
          setImageColor12(None);
        } else if (
          imageColor12 === None &&
          millStatus === false &&
          imageColor7 !== (green || lightgreen)
        ) {
          setImageColor12(green);
        } else if (imageColor7 === green) {
          setImageColor7(lightgreen);
        }

        if (imageColor7 === None) {
        } else if (imageColor7 === lightgreen) {
          setImageColor7(green);
        } else if (imageColor8 === green) {
          setImageColor8(None);
        } else if (
          imageColor8 === None &&
          millStatus === false &&
          imageColor7 !== (green || lightgreen)
        ) {
          setImageColor8(green);
        } else if (imageColor7 === green) {
          setImageColor7(lightgreen);
        }
        if (roundColor === imageColor7) {
          if (
            millStatus === true &&
            (imageColor7 === millColor || imageColor7 === None)
          ) {
          } else if (
            hasPiece12 === false &&
            clickStatus12 === true &&
            imageColor7 !== None &&
            imageColor12 === lightgreen
          ) {
            setImageColor12(imageColor7);
            setImageColor7(None);
            setHasPiece7(false);
            setHasMilled2(false);
            setHasMilled5(false);
            setHasPiece12(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus7(false);
            setClickStatus12(false);
          } else if (
            hasPiece8 === false &&
            clickStatus8 === true &&
            imageColor7 !== None &&
            imageColor8 === lightgreen
          ) {
            setImageColor8(imageColor7);
            setImageColor7(None);
            setHasPiece7(false);
            setHasMilled2(false);
            setHasMilled5(false);
            setHasPiece8(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus7(false);
            setClickStatus8(false);
          }
          if (imageColor12 === lightgreen && imageColor8 === lightgreen) {
            setImageColor12(None);
            setImageColor7(imageColor7);
            setImageColor8(None);

            setClickStatus12(false);
            setHasPiece12(false);
            setClickStatus8(false);
            setHasPiece8(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor7}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate8 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)

    if (
      millStatus === true &&
      clickStatus8 === true &&
      hasMilled8 === false &&
      hasMilled5 === false &&
      roundColor === imageColor8 &&
      imageColor8 !== (millColor && None)
    ) {
      if (imageColor8 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor8 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected8");
      setHasPiece8(false);
      setImageColor8(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus8(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus8(true);
        if (
          millStatus === true &&
          (imageColor8 === millColor || imageColor8 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece8 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor8(Blue);
          setClickStatus8(false);
        } else if (playerStatus % 2 === 1 && hasPiece8 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor8(Red);
          setClickStatus8(false);
        }
        setHasPiece8(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor8}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus8(true);

        if (imageColor8 === None) {
        } else if (imageColor8 === lightgreen) {
          setImageColor8(green);
        } else if (imageColor7 === green) {
          setImageColor7(None);
        } else if (
          imageColor7 === None &&
          millStatus === false &&
          imageColor8 !== (green || lightgreen)
        ) {
          setImageColor7(green);
        } else if (imageColor8 === green) {
          setImageColor8(lightgreen);
        }

        if (imageColor8 === None) {
        } else if (imageColor8 === lightgreen) {
          setImageColor8(green);
        } else if (imageColor5 === green) {
          setImageColor5(None);
        } else if (
          imageColor5 === None &&
          millStatus === false &&
          imageColor8 !== (green || lightgreen)
        ) {
          setImageColor5(green);
        } else if (imageColor8 === green) {
          setImageColor8(lightgreen);
        }

        if (imageColor8 === None) {
        } else if (imageColor8 === lightgreen) {
          setImageColor8(green);
        } else if (imageColor9 === green) {
          setImageColor9(None);
        } else if (
          imageColor9 === None &&
          millStatus === false &&
          imageColor8 !== (green || lightgreen)
        ) {
          setImageColor9(green);
        } else if (imageColor8 === green) {
          setImageColor8(lightgreen);
        }
        if (roundColor === imageColor8) {
          if (
            millStatus === true &&
            (imageColor8 === millColor || imageColor8 === None)
          ) {
          } else if (
            hasPiece7 === false &&
            clickStatus7 === true &&
            imageColor8 !== None &&
            imageColor7 === lightgreen
          ) {
            setImageColor7(imageColor8);
            setImageColor8(None);
            setHasPiece8(false);
            setHasMilled8(false);
            setHasMilled5(false);
            setHasPiece7(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus8(false);
            setClickStatus7(false);
          } else if (
            hasPiece5 === false &&
            clickStatus5 === true &&
            imageColor8 !== None &&
            imageColor5 === lightgreen
          ) {
            setImageColor5(imageColor8);
            setImageColor8(None);
            setHasPiece8(false);
            setHasMilled8(false);
            setHasMilled5(false);
            setHasPiece5(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus8(false);
            setClickStatus5(false);
          } else if (
            hasPiece9 === false &&
            clickStatus9 === true &&
            imageColor8 !== None &&
            imageColor9 === lightgreen
          ) {
            setImageColor9(imageColor8);
            setImageColor8(None);
            setHasPiece8(false);
            setHasMilled8(false);
            setHasMilled5(false);
            setHasPiece9(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus8(false);
            setClickStatus9(false);
          }
          if (
            imageColor7 === lightgreen &&
            imageColor9 === lightgreen &&
            imageColor5 === lightgreen
          ) {
            setImageColor7(None);
            setImageColor8(imageColor8);
            setImageColor9(None);
            setImageColor5(None);

            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus7(false);
            setHasPiece7(false);
            setClickStatus9(false);
            setHasPiece9(false);
          } else if (imageColor7 === lightgreen && imageColor9 === lightgreen) {
            setImageColor7(None);
            setImageColor8(imageColor8);
            setImageColor9(None);
            setClickStatus7(false);
            setHasPiece7(false);
            setClickStatus9(false);
            setHasPiece9(false);
          } else if (imageColor7 === lightgreen && imageColor5 === lightgreen) {
            setImageColor7(None);
            setImageColor8(imageColor8);
            setImageColor5(None);
            setClickStatus7(false);
            setHasPiece7(false);
            setClickStatus5(false);
            setHasPiece5(false);
          } else if (imageColor9 === lightgreen && imageColor5 === lightgreen) {
            setImageColor5(None);
            setImageColor8(imageColor8);
            setImageColor9(None);
            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus9(false);
            setHasPiece9(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor8}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate9 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)

    if (
      millStatus === true &&
      clickStatus9 === true &&
      hasMilled5 === false &&
      hasMilled7 === false &&
      roundColor === imageColor9 &&
      imageColor9 !== (millColor && None)
    ) {
      if (imageColor9 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor9 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected9");
      setHasPiece9(false);
      setImageColor9(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus9(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus9(true);
        if (
          millStatus === true &&
          (imageColor9 === millColor || imageColor9 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece9 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor9(Blue);
          setClickStatus9(false);
        } else if (playerStatus % 2 === 1 && hasPiece9 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor9(Red);
          setClickStatus9(false);
        }
        setHasPiece9(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor9}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus9(true);

        if (imageColor9 === None) {
        } else if (imageColor9 === lightgreen) {
          setImageColor9(green);
        } else if (imageColor8 === green) {
          setImageColor8(None);
        } else if (
          imageColor8 === None &&
          millStatus === false &&
          imageColor9 !== (green || lightgreen)
        ) {
          setImageColor8(green);
        } else if (imageColor9 === green) {
          setImageColor9(lightgreen);
        }

        if (imageColor9 === None) {
        } else if (imageColor9 === lightgreen) {
          setImageColor9(green);
        } else if (imageColor13 === green) {
          setImageColor13(None);
        } else if (
          imageColor13 === None &&
          millStatus === false &&
          imageColor9 !== (green || lightgreen)
        ) {
          setImageColor13(green);
        } else if (imageColor9 === green) {
          setImageColor9(lightgreen);
        }
        if (roundColor === imageColor9) {
          if (
            millStatus === true &&
            (imageColor9 === millColor || imageColor9 === None)
          ) {
          } else if (
            hasPiece8 === false &&
            clickStatus8 === true &&
            imageColor9 !== None &&
            imageColor8 === lightgreen
          ) {
            setImageColor8(imageColor9);
            setImageColor9(None);
            setHasPiece9(false);
            setHasMilled7(false);
            setHasMilled5(false);
            setHasPiece8(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus9(false);
            setClickStatus8(false);
          } else if (
            hasPiece13 === false &&
            clickStatus13 === true &&
            imageColor9 !== None &&
            imageColor13 === lightgreen
          ) {
            setImageColor13(imageColor9);
            setImageColor9(None);
            setHasPiece9(false);
            setHasMilled7(false);
            setHasMilled5(false);
            setHasPiece13(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus9(false);
            setClickStatus13(false);
          }
          if (imageColor8 === lightgreen && imageColor13 === lightgreen) {
            setImageColor8(None);
            setImageColor9(imageColor8);
            setImageColor13(None);
            setClickStatus8(false);
            setHasPiece8(false);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus8(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor9}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate10 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus10 === true &&
      hasMilled1 === false &&
      hasMilled15 === false &&
      roundColor === imageColor10 &&
      imageColor10 !== (millColor && None)
    ) {
      if (imageColor10 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor10 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected10");
      setHasPiece10(false);
      setImageColor10(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus10(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus10(true);
        if (
          millStatus === true &&
          (imageColor10 === millColor || imageColor10 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece10 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor10(Blue);
          setClickStatus10(false);
        } else if (playerStatus % 2 === 1 && hasPiece10 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor10(Red);
          setClickStatus10(false);
        }
        setHasPiece10(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor10}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus10(true);

        if (imageColor10 === None) {
        } else if (imageColor10 === lightgreen) {
          setImageColor10(green);
        } else if (imageColor1 === green) {
          setImageColor1(None);
        } else if (
          imageColor1 === None &&
          millStatus === false &&
          imageColor10 !== (green || lightgreen)
        ) {
          setImageColor1(green);
        } else if (imageColor10 === green) {
          setImageColor10(lightgreen);
        }

        if (imageColor10 === None) {
        } else if (imageColor10 === lightgreen) {
          setImageColor10(green);
        } else if (imageColor22 === green) {
          setImageColor22(None);
        } else if (
          imageColor22 === None &&
          millStatus === false &&
          imageColor10 !== (green || lightgreen)
        ) {
          setImageColor22(green);
        } else if (imageColor10 === green) {
          setImageColor10(lightgreen);
        }

        if (imageColor10 === None) {
        } else if (imageColor10 === lightgreen) {
          setImageColor10(green);
        } else if (imageColor11 === green) {
          setImageColor11(None);
        } else if (
          imageColor11 === None &&
          millStatus === false &&
          imageColor10 !== (green || lightgreen)
        ) {
          setImageColor11(green);
        } else if (imageColor10 === green) {
          setImageColor10(lightgreen);
        }
        if (roundColor === imageColor10) {
          if (
            millStatus === true &&
            (imageColor10 === millColor || imageColor10 === None)
          ) {
          } else if (
            hasPiece1 === false &&
            clickStatus1 === true &&
            imageColor10 !== None &&
            imageColor1 === lightgreen
          ) {
            setImageColor1(imageColor10);
            setImageColor10(None);
            setHasPiece10(false);
            setHasPiece1(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled15(false);
            setClickStatus10(false);
            setClickStatus1(false);
          } else if (
            hasPiece22 === false &&
            clickStatus22 === true &&
            imageColor10 !== None &&
            imageColor22 === lightgreen
          ) {
            setImageColor22(imageColor10);
            setImageColor10(None);
            setHasPiece10(false);
            setHasPiece22(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled15(false);
            setClickStatus10(false);
            setClickStatus22(false);
          } else if (
            hasPiece11 === false &&
            clickStatus11 === true &&
            imageColor10 !== None &&
            imageColor11 === lightgreen
          ) {
            setImageColor11(imageColor10);
            setImageColor10(None);
            setHasPiece10(false);
            setHasPiece11(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled15(false);
            setClickStatus10(false);
            setClickStatus11(false);
          }
          if (
            imageColor22 === lightgreen &&
            imageColor1 === lightgreen &&
            imageColor11 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor10(imageColor10);
            setImageColor1(None);
            setImageColor11(None);
            setClickStatus22(false);
            setHasPiece22(false);
            setClickStatus1(false);
            setHasPiece1(false);
            setClickStatus11(false);
            setHasPiece11(false);
          } else if (
            imageColor22 === lightgreen &&
            imageColor1 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor10(imageColor10);
            setImageColor1(None);
            setClickStatus1(false);
            setHasPiece1(false);
            setClickStatus22(false);
            setHasPiece22(false);
          } else if (
            imageColor22 === lightgreen &&
            imageColor11 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor10(imageColor10);
            setImageColor11(None);
            setClickStatus11(false);
            setHasPiece11(false);
            setClickStatus22(false);
            setHasPiece22(false);
          } else if (
            imageColor1 === lightgreen &&
            imageColor11 === lightgreen
          ) {
            setImageColor1(None);
            setImageColor10(imageColor10);
            setImageColor11(None);
            setClickStatus1(false);
            setHasPiece1(false);
            setClickStatus11(false);
            setHasPiece11(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor10}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate11 = (props) => {
    if (
      millStatus === true &&
      clickStatus11 === true &&
      hasMilled15 === false &&
      hasMilled16 === false &&
      roundColor === imageColor11 &&
      imageColor11 !== (millColor && None)
    ) {
      if (imageColor11 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor11 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected11");
      setHasPiece11(false);
      setImageColor11(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus11(false);
    }
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus11(true);
        if (
          millStatus === true &&
          (imageColor11 === millColor || imageColor11 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece11 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor11(Blue);
          setClickStatus11(false);
        } else if (playerStatus % 2 === 1 && hasPiece11 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor11(Red);
          setClickStatus11(false);
        }
        setHasPiece11(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor11}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus11(true);

        if (imageColor11 === None) {
        } else if (imageColor11 === lightgreen) {
          setImageColor11(green);
        } else if (imageColor10 === green) {
          setImageColor10(None);
        } else if (
          imageColor10 === None &&
          millStatus === false &&
          imageColor11 !== (green || lightgreen)
        ) {
          setImageColor10(green);
        } else if (imageColor11 === green) {
          setImageColor11(lightgreen);
        }

        if (imageColor11 === None) {
        } else if (imageColor11 === lightgreen) {
          setImageColor11(green);
        } else if (imageColor4 === green) {
          setImageColor4(None);
        } else if (
          imageColor4 === None &&
          millStatus === false &&
          imageColor11 !== (green || lightgreen)
        ) {
          setImageColor4(green);
        } else if (imageColor11 === green) {
          setImageColor11(lightgreen);
        }

        if (imageColor11 === None) {
        } else if (imageColor11 === lightgreen) {
          setImageColor11(green);
        } else if (imageColor19 === green) {
          setImageColor19(None);
        } else if (
          imageColor19 === None &&
          millStatus === false &&
          imageColor11 !== (green || lightgreen)
        ) {
          setImageColor19(green);
        } else if (imageColor11 === green) {
          setImageColor11(lightgreen);
        }
        if (imageColor11 === None) {
        } else if (imageColor11 === lightgreen) {
          setImageColor11(green);
        } else if (imageColor12 === green) {
          setImageColor12(None);
        } else if (
          imageColor12 === None &&
          millStatus === false &&
          imageColor11 !== (green || lightgreen)
        ) {
          setImageColor12(green);
        } else if (imageColor11 === green) {
          setImageColor11(lightgreen);
        }
        if (roundColor === imageColor11) {
          if (
            millStatus === true &&
            (imageColor11 === millColor || imageColor11 === None)
          ) {
          } else if (
            hasPiece10 === false &&
            clickStatus10 === true &&
            imageColor11 !== None &&
            imageColor10 === lightgreen
          ) {
            setImageColor10(imageColor11);
            setImageColor11(None);
            setHasPiece11(false);
            setHasMilled16(false);
            setHasMilled15(false);
            setHasPiece10(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus11(false);
            setClickStatus10(false);
          } else if (
            hasPiece4 === false &&
            clickStatus4 === true &&
            imageColor11 !== None &&
            imageColor4 === lightgreen
          ) {
            setImageColor4(imageColor11);
            setImageColor11(None);
            setHasPiece11(false);
            setHasMilled16(false);
            setHasMilled15(false);
            setHasPiece4(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus11(false);
            setClickStatus4(false);
          } else if (
            hasPiece19 === false &&
            clickStatus19 === true &&
            imageColor11 !== None &&
            imageColor19 === lightgreen
          ) {
            setImageColor19(imageColor11);
            setImageColor11(None);
            setHasPiece11(false);
            setHasMilled16(false);
            setHasMilled15(false);
            setHasPiece19(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus11(false);
            setClickStatus19(false);
          } else if (
            hasPiece12 === false &&
            clickStatus12 === true &&
            imageColor11 !== None &&
            imageColor12 === lightgreen
          ) {
            setImageColor12(imageColor11);
            setImageColor11(None);
            setHasPiece11(false);
            setHasMilled16(false);
            setHasMilled15(false);
            setHasPiece12(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus11(false);
            setClickStatus12(false);
          }
          if (
            imageColor4 === lightgreen &&
            imageColor10 === lightgreen &&
            imageColor19 === lightgreen &&
            imageColor12 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor10(None);
            setImageColor19(None);
            setImageColor12(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus12(false);
            setHasPiece12(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor10 === lightgreen &&
            imageColor12 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor10(None);
            setImageColor12(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus12(false);
            setHasPiece12(false);
          } else if (
            imageColor19 === lightgreen &&
            imageColor10 === lightgreen &&
            imageColor12 === lightgreen
          ) {
            setImageColor19(None);
            setImageColor11(imageColor11);
            setImageColor10(None);
            setImageColor12(None);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus12(false);
            setHasPiece12(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor10 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor10(None);
            setImageColor19(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus19(false);
            setHasPiece19(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor12 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor12(None);
            setImageColor19(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus12(false);
            setHasPiece12(false);
            setClickStatus19(false);
            setHasPiece19(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor10 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor10(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus10(false);
            setHasPiece10(false);
          } else if (
            imageColor4 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor4(None);
            setImageColor11(imageColor11);
            setImageColor19(None);
            setClickStatus4(false);
            setHasPiece4(false);
            setClickStatus19(false);
            setHasPiece19(false);
          } else if (
            imageColor10 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor10(None);
            setImageColor11(imageColor11);
            setImageColor19(None);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus19(false);
            setHasPiece19(false);
          } else if (
            imageColor10 === lightgreen &&
            imageColor12 === lightgreen
          ) {
            setImageColor10(None);
            setImageColor11(imageColor11);
            setImageColor12(None);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus12(false);
            setHasPiece12(false);
          } else if (
            imageColor12 === lightgreen &&
            imageColor4 === lightgreen
          ) {
            setImageColor12(None);
            setImageColor11(imageColor11);
            setImageColor4(None);
            setClickStatus12(false);
            setHasPiece12(false);
            setClickStatus4(false);
            setHasPiece4(false);
          } else if (
            imageColor12 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor12(None);
            setImageColor11(imageColor11);
            setImageColor19(None);
            setClickStatus12(false);
            setHasPiece12(false);
            setClickStatus19(false);
            setHasPiece19(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor11}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate12 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus12 === true &&
      hasMilled2 === false &&
      hasMilled15 === false &&
      roundColor === imageColor12 &&
      imageColor12 !== (millColor && None)
    ) {
      if (imageColor12 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor12 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected12");
      setHasPiece12(false);
      setImageColor12(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus12(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus12(true);
        if (
          millStatus === true &&
          (imageColor12 === millColor || imageColor12 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece12 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor12(Blue);
          setClickStatus12(false);
        } else if (playerStatus % 2 === 1 && hasPiece12 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor12(Red);
          setClickStatus12(false);
        }
        setHasPiece12(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor12}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus12(true);

        if (imageColor12 === None) {
        } else if (imageColor12 === lightgreen) {
          setImageColor12(green);
        } else if (imageColor11 === green) {
          setImageColor11(None);
        } else if (
          imageColor11 === None &&
          millStatus === false &&
          imageColor12 !== (green || lightgreen)
        ) {
          setImageColor11(green);
        } else if (imageColor12 === green) {
          setImageColor12(lightgreen);
        }

        if (imageColor12 === None) {
        } else if (imageColor12 === lightgreen) {
          setImageColor12(green);
        } else if (imageColor7 === green) {
          setImageColor7(None);
        } else if (
          imageColor7 === None &&
          millStatus === false &&
          imageColor12 !== (green || lightgreen)
        ) {
          setImageColor7(green);
        } else if (imageColor12 === green) {
          setImageColor12(lightgreen);
        }

        if (imageColor12 === None) {
        } else if (imageColor12 === lightgreen) {
          setImageColor12(green);
        } else if (imageColor16 === green) {
          setImageColor16(None);
        } else if (
          imageColor16 === None &&
          millStatus === false &&
          imageColor12 !== (green || lightgreen)
        ) {
          setImageColor16(green);
        } else if (imageColor12 === green) {
          setImageColor12(lightgreen);
        }
        if (roundColor === imageColor12) {
          if (
            millStatus === true &&
            (imageColor12 === millColor || imageColor12 === None)
          ) {
          } else if (
            hasPiece11 === false &&
            clickStatus11 === true &&
            imageColor12 !== None &&
            imageColor11 === lightgreen
          ) {
            setImageColor11(imageColor12);
            setImageColor12(None);
            setHasPiece12(false);
            setHasPiece11(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled2(false);
            setHasMilled15(false);
            setClickStatus12(false);
            setClickStatus11(false);
          } else if (
            hasPiece7 === false &&
            clickStatus7 === true &&
            imageColor12 !== None &&
            imageColor7 === lightgreen
          ) {
            setImageColor7(imageColor12);
            setImageColor12(None);
            setHasPiece12(false);
            setHasPiece7(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled2(false);
            setHasMilled15(false);
            setClickStatus12(false);
            setClickStatus7(false);
          } else if (
            hasPiece16 === false &&
            clickStatus16 === true &&
            imageColor12 !== None &&
            imageColor16 === lightgreen
          ) {
            setImageColor16(imageColor12);
            setImageColor12(None);
            setHasPiece12(false);
            setHasPiece16(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled2(false);
            setHasMilled15(false);
            setClickStatus12(false);
            setClickStatus16(false);
          }
          if (
            imageColor11 === lightgreen &&
            imageColor7 === lightgreen &&
            imageColor16 === lightgreen
          ) {
            setImageColor11(None);
            setImageColor12(imageColor12);
            setImageColor7(None);
            setImageColor16(None);

            setClickStatus11(false);
            setHasPiece11(false);
            setClickStatus7(false);
            setHasPiece7(false);
            setClickStatus16(false);
            setHasPiece16(false);
          } else if (
            imageColor11 === lightgreen &&
            imageColor1 === lightgreen
          ) {
            setImageColor11(None);
            setImageColor12(imageColor12);
            setImageColor7(None);

            setClickStatus11(false);
            setHasPiece11(false);
            setClickStatus7(false);
            setHasPiece7(false);
          } else if (
            imageColor11 === lightgreen &&
            imageColor16 === lightgreen
          ) {
            setImageColor11(None);
            setImageColor12(imageColor12);
            setImageColor16(None);
            setClickStatus11(false);
            setHasPiece11(false);
            setClickStatus16(false);
            setHasPiece16(false);
          } else if (
            imageColor7 === lightgreen &&
            imageColor16 === lightgreen
          ) {
            setImageColor16(None);
            setImageColor12(imageColor12);
            setImageColor7(None);

            setClickStatus7(false);
            setHasPiece7(false);
            setClickStatus16(false);
            setHasPiece16(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor12}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate13 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus13 === true &&
      hasMilled12 === false &&
      hasMilled7 === false &&
      roundColor === imageColor13 &&
      imageColor13 !== (millColor && None)
    ) {
      if (imageColor13 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor13 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected13");
      setHasPiece13(false);
      setImageColor13(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus13(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus13(true);
        if (
          millStatus === true &&
          (imageColor13 === millColor || imageColor13 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece13 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor13(Blue);
          setClickStatus13(false);
        } else if (playerStatus % 2 === 1 && hasPiece13 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor13(Red);
          setClickStatus13(false);
        }
        setHasPiece13(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor13}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus13(true);

        if (imageColor13 === None) {
        } else if (imageColor13 === lightgreen) {
          setImageColor13(green);
        } else if (imageColor9 === green) {
          setImageColor9(None);
        } else if (
          imageColor9 === None &&
          millStatus === false &&
          imageColor13 !== (green || lightgreen)
        ) {
          setImageColor9(green);
        } else if (imageColor13 === green) {
          setImageColor13(lightgreen);
        }

        if (imageColor13 === None) {
        } else if (imageColor13 === lightgreen) {
          setImageColor13(green);
        } else if (imageColor18 === green) {
          setImageColor18(None);
        } else if (
          imageColor18 === None &&
          millStatus === false &&
          imageColor13 !== (green || lightgreen)
        ) {
          setImageColor18(green);
        } else if (imageColor13 === green) {
          setImageColor13(lightgreen);
        }

        if (imageColor13 === None) {
        } else if (imageColor13 === lightgreen) {
          setImageColor13(green);
        } else if (imageColor14 === green) {
          setImageColor14(None);
        } else if (
          imageColor14 === None &&
          millStatus === false &&
          imageColor13 !== (green || lightgreen)
        ) {
          setImageColor14(green);
        } else if (imageColor13 === green) {
          setImageColor13(lightgreen);
        }
        if (roundColor === imageColor13) {
          if (
            millStatus === true &&
            (imageColor13 === millColor || imageColor13 === None)
          ) {
          } else if (
            hasPiece9 === false &&
            clickStatus9 === true &&
            imageColor13 !== None &&
            imageColor9 === lightgreen
          ) {
            setImageColor9(imageColor13);
            setImageColor13(None);
            setHasPiece13(false);
            setHasMilled12(false);
            setHasMilled7(false);
            setHasPiece9(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus13(false);
            setClickStatus9(false);
          } else if (
            hasPiece18 === false &&
            clickStatus18 === true &&
            imageColor13 !== None &&
            imageColor18 === lightgreen
          ) {
            setImageColor18(imageColor13);
            setImageColor13(None);
            setHasPiece13(false);
            setHasMilled12(false);
            setHasMilled7(false);
            setHasPiece18(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus13(false);
            setClickStatus18(false);
          } else if (
            hasPiece14 === false &&
            clickStatus14 === true &&
            imageColor13 !== None &&
            imageColor14 === lightgreen
          ) {
            setImageColor14(imageColor13);
            setImageColor13(None);
            setHasPiece13(false);
            setHasMilled12(false);
            setHasMilled7(false);
            setHasPiece14(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus13(false);
            setClickStatus14(false);
          }
          if (
            imageColor9 === lightgreen &&
            imageColor18 === lightgreen &&
            imageColor14 === lightgreen
          ) {
            setImageColor9(None);
            setImageColor13(imageColor13);
            setImageColor18(None);
            setImageColor14(None);

            setClickStatus9(false);
            setHasPiece9(false);
            setClickStatus18(false);
            setHasPiece18(false);
            setClickStatus14(false);
            setHasPiece14(false);
          } else if (
            imageColor9 === lightgreen &&
            imageColor18 === lightgreen
          ) {
            setImageColor9(None);
            setImageColor13(imageColor13);
            setImageColor18(None);
            setClickStatus9(false);
            setHasPiece9(false);
            setClickStatus18(false);
            setHasPiece18(false);
          } else if (
            imageColor9 === lightgreen &&
            imageColor14 === lightgreen
          ) {
            setImageColor9(None);
            setImageColor13(imageColor13);
            setImageColor14(None);
            setClickStatus9(false);
            setHasPiece9(false);
            setClickStatus14(false);
            setHasPiece14(false);
          } else if (
            imageColor18 === lightgreen &&
            imageColor14 === lightgreen
          ) {
            setImageColor14(None);
            setImageColor13(imageColor13);
            setImageColor18(None);
            setClickStatus18(false);
            setHasPiece18(false);
            setClickStatus14(false);
            setHasPiece14(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor13}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate14 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus14 === true &&
      hasMilled12 === false &&
      hasMilled13 === false &&
      roundColor === imageColor14 &&
      imageColor14 !== (millColor && None)
    ) {
      if (imageColor14 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor14 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected14");
      setHasPiece14(false);
      setImageColor14(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus14(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus14(true);
        if (
          millStatus === true &&
          (imageColor14 === millColor || imageColor14 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece14 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor14(Blue);
          setClickStatus14(false);
        } else if (playerStatus % 2 === 1 && hasPiece14 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor14(Red);
          setClickStatus14(false);
        }
        setHasPiece14(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor14}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus14(true);

        if (imageColor14 === None) {
        } else if (imageColor14 === lightgreen) {
          setImageColor14(green);
        } else if (imageColor13 === green) {
          setImageColor13(None);
        } else if (
          imageColor13 === None &&
          millStatus === false &&
          imageColor14 !== (green || lightgreen)
        ) {
          setImageColor13(green);
        } else if (imageColor14 === green) {
          setImageColor14(lightgreen);
        }

        if (imageColor14 === None) {
        } else if (imageColor14 === lightgreen) {
          setImageColor14(green);
        } else if (imageColor6 === green) {
          setImageColor6(None);
        } else if (
          imageColor6 === None &&
          millStatus === false &&
          imageColor14 !== (green || lightgreen)
        ) {
          setImageColor6(green);
        } else if (imageColor14 === green) {
          setImageColor14(lightgreen);
        }

        if (imageColor14 === None) {
        } else if (imageColor14 === lightgreen) {
          setImageColor14(green);
        } else if (imageColor21 === green) {
          setImageColor21(None);
        } else if (
          imageColor21 === None &&
          millStatus === false &&
          imageColor14 !== (green || lightgreen)
        ) {
          setImageColor21(green);
        } else if (imageColor14 === green) {
          setImageColor14(lightgreen);
        }
        if (imageColor14 === None) {
        } else if (imageColor14 === lightgreen) {
          setImageColor14(green);
        } else if (imageColor15 === green) {
          setImageColor15(None);
        } else if (
          imageColor15 === None &&
          millStatus === false &&
          imageColor14 !== (green || lightgreen)
        ) {
          setImageColor15(green);
        } else if (imageColor14 === green) {
          setImageColor14(lightgreen);
        }
        if (roundColor === imageColor14) {
          if (
            millStatus === true &&
            (imageColor14 === millColor || imageColor14 === None)
          ) {
          } else if (
            hasPiece13 === false &&
            clickStatus13 === true &&
            imageColor14 !== None &&
            imageColor13 === lightgreen
          ) {
            setImageColor13(imageColor14);
            setImageColor14(None);
            setHasPiece14(false);
            setHasMilled12(false);
            setHasMilled13(false);
            setHasPiece13(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus14(false);
            setClickStatus13(false);
          } else if (
            hasPiece6 === false &&
            clickStatus6 === true &&
            imageColor14 !== None &&
            imageColor6 === lightgreen
          ) {
            setImageColor6(imageColor14);
            setImageColor14(None);
            setHasPiece14(false);
            setHasMilled12(false);
            setHasMilled13(false);
            setHasPiece6(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus14(false);
            setClickStatus6(false);
          } else if (
            hasPiece21 === false &&
            clickStatus21 === true &&
            imageColor14 !== None &&
            imageColor21 === lightgreen
          ) {
            setImageColor21(imageColor14);
            setImageColor14(None);
            setHasPiece14(false);
            setHasMilled12(false);
            setHasMilled13(false);
            setHasPiece21(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus14(false);
            setClickStatus21(false);
          } else if (
            hasPiece15 === false &&
            clickStatus15 === true &&
            imageColor14 !== None &&
            imageColor15 === lightgreen
          ) {
            setImageColor15(imageColor14);
            setImageColor14(None);
            setHasPiece14(false);
            setHasMilled12(false);
            setHasMilled13(false);
            setHasPiece15(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus14(false);
            setClickStatus15(false);
          }
          if (
            imageColor13 === lightgreen &&
            imageColor21 === lightgreen &&
            imageColor6 === lightgreen &&
            imageColor15 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor21(None);
            setImageColor6(None);
            setImageColor15(None);

            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor13 === lightgreen &&
            imageColor21 === lightgreen &&
            imageColor15 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor21(None);
            setImageColor15(None);

            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus15(false);
            setHasPiece15(false);
          } else if (
            imageColor6 === lightgreen &&
            imageColor21 === lightgreen &&
            imageColor15 === lightgreen
          ) {
            setImageColor6(None);
            setImageColor14(imageColor14);
            setImageColor21(None);
            setImageColor15(None);
            setClickStatus6(false);
            setHasPiece6(false);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus15(false);
            setHasPiece15(false);
          } else if (
            imageColor13 === lightgreen &&
            imageColor21 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor21(None);
            setImageColor6(None);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor13 === lightgreen &&
            imageColor15 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor15(None);
            setImageColor6(None);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor13 === lightgreen &&
            imageColor21 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor21(None);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus21(false);
            setHasPiece21(false);
          } else if (
            imageColor13 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor13(None);
            setImageColor14(imageColor14);
            setImageColor6(None);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor21 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor21(None);
            setImageColor14(imageColor14);
            setImageColor6(None);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus6(false);
            setHasPiece6(false);
          } else if (
            imageColor21 === lightgreen &&
            imageColor15 === lightgreen
          ) {
            setImageColor21(None);
            setImageColor14(imageColor14);
            setImageColor15(None);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus15(false);
            setHasPiece15(false);
          } else if (
            imageColor15 === lightgreen &&
            imageColor13 === lightgreen
          ) {
            setImageColor15(None);
            setImageColor14(imageColor14);
            setImageColor13(None);
            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus13(false);
            setHasPiece13(false);
          } else if (
            imageColor15 === lightgreen &&
            imageColor6 === lightgreen
          ) {
            setImageColor15(None);
            setImageColor14(imageColor14);
            setImageColor6(None);
            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus6(false);
            setHasPiece6(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor14}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate15 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus15 === true &&
      hasMilled12 === false &&
      hasMilled14 === false &&
      roundColor === imageColor15 &&
      imageColor15 !== (millColor && None)
    ) {
      if (imageColor15 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor15 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected15");
      setHasPiece15(false);
      setImageColor15(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus15(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus15(true);
        if (
          millStatus === true &&
          (imageColor15 === millColor || imageColor15 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece15 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor15(Blue);
          setClickStatus15(false);
        } else if (playerStatus % 2 === 1 && hasPiece15 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor15(Red);
          setClickStatus15(false);
        }
        setHasPiece15(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor15}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus15(true);

        if (imageColor15 === None) {
        } else if (imageColor15 === lightgreen) {
          setImageColor15(green);
        } else if (imageColor3 === green) {
          setImageColor3(None);
        } else if (
          imageColor3 === None &&
          millStatus === false &&
          imageColor15 !== (green || lightgreen)
        ) {
          setImageColor3(green);
        } else if (imageColor15 === green) {
          setImageColor15(lightgreen);
        }

        if (imageColor15 === None) {
        } else if (imageColor15 === lightgreen) {
          setImageColor15(green);
        } else if (imageColor14 === green) {
          setImageColor14(None);
        } else if (
          imageColor14 === None &&
          millStatus === false &&
          imageColor15 !== (green || lightgreen)
        ) {
          setImageColor14(green);
        } else if (imageColor15 === green) {
          setImageColor15(lightgreen);
        }

        if (imageColor15 === None) {
        } else if (imageColor15 === lightgreen) {
          setImageColor15(green);
        } else if (imageColor24 === green) {
          setImageColor24(None);
        } else if (
          imageColor24 === None &&
          millStatus === false &&
          imageColor15 !== (green || lightgreen)
        ) {
          setImageColor24(green);
        } else if (imageColor15 === green) {
          setImageColor15(lightgreen);
        }
        if (roundColor === imageColor15) {
          if (
            millStatus === true &&
            (imageColor15 === millColor || imageColor15 === None)
          ) {
          } else if (
            hasPiece3 === false &&
            clickStatus3 === true &&
            imageColor15 !== None &&
            imageColor3 === lightgreen
          ) {
            setImageColor3(imageColor15);
            setImageColor15(None);
            setHasPiece15(false);
            setHasPiece3(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled12(false);
            setHasMilled14(false);
            setClickStatus15(false);
            setClickStatus3(false);
          } else if (
            hasPiece14 === false &&
            clickStatus14 === true &&
            imageColor15 !== None &&
            imageColor14 === lightgreen
          ) {
            setImageColor14(imageColor15);
            setImageColor15(None);
            setHasPiece15(false);
            setHasPiece14(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled12(false);
            setHasMilled14(false);
            setClickStatus15(false);
            setClickStatus14(false);
          } else if (
            hasPiece24 === false &&
            clickStatus24 === true &&
            imageColor15 !== None &&
            imageColor24 === lightgreen
          ) {
            setImageColor24(imageColor15);
            setImageColor15(None);
            setHasPiece15(false);
            setHasPiece24(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled12(false);
            setHasMilled14(false);
            setClickStatus15(false);
            setClickStatus24(false);
          }
          if (
            imageColor14 === lightgreen &&
            imageColor24 === lightgreen &&
            imageColor3 === lightgreen
          ) {
            setImageColor14(None);
            setImageColor15(imageColor15);
            setImageColor24(None);
            setImageColor3(None);
            setClickStatus14(false);
            setHasPiece14(false);
            setClickStatus24(false);
            setHasPiece24(false);
            setClickStatus3(false);
            setHasPiece3(false);
          } else if (
            imageColor14 === lightgreen &&
            imageColor24 === lightgreen
          ) {
            setImageColor14(None);
            setImageColor15(imageColor15);
            setImageColor24(None);
            setClickStatus14(false);
            setHasPiece14(false);
            setClickStatus24(false);
            setHasPiece24(false);
          } else if (
            imageColor14 === lightgreen &&
            imageColor3 === lightgreen
          ) {
            setImageColor14(None);
            setImageColor15(imageColor15);
            setImageColor3(None);
            setClickStatus14(false);
            setHasPiece14(false);
            setClickStatus3(false);
            setHasPiece3(false);
          } else if (
            imageColor3 === lightgreen &&
            imageColor24 === lightgreen
          ) {
            setImageColor3(None);
            setImageColor15(imageColor15);
            setImageColor24(None);
            setClickStatus3(false);
            setHasPiece3(false);
            setClickStatus24(false);
            setHasPiece24(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor15}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate16 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus16 === true &&
      hasMilled2 === false &&
      hasMilled6 === false &&
      roundColor === imageColor16 &&
      imageColor16 !== (millColor && None)
    ) {
      if (imageColor16 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor16 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected16");
      setHasPiece16(false);
      setImageColor16(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus16(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus16(true);
        if (
          millStatus === true &&
          (imageColor16 === millColor || imageColor16 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece16 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor16(Blue);
          setClickStatus16(false);
        } else if (playerStatus % 2 === 1 && hasPiece16 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor16(Red);
          setClickStatus16(false);
        }
        setHasPiece16(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor16}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus16(true);

        if (imageColor16 === None) {
        } else if (imageColor16 === lightgreen) {
          setImageColor16(green);
        } else if (imageColor12 === green) {
          setImageColor12(None);
        } else if (
          imageColor12 === None &&
          millStatus === false &&
          imageColor16 !== (green || lightgreen)
        ) {
          setImageColor12(green);
        } else if (imageColor16 === green) {
          setImageColor16(lightgreen);
        }

        if (imageColor16 === None) {
        } else if (imageColor16 === lightgreen) {
          setImageColor16(green);
        } else if (imageColor17 === green) {
          setImageColor17(None);
        } else if (
          imageColor17 === None &&
          millStatus === false &&
          imageColor16 !== (green || lightgreen)
        ) {
          setImageColor17(green);
        } else if (imageColor16 === green) {
          setImageColor16(lightgreen);
        }
        if (roundColor === imageColor16) {
          if (
            millStatus === true &&
            (imageColor16 === millColor || imageColor16 === None)
          ) {
          } else if (
            hasPiece12 === false &&
            clickStatus12 === true &&
            imageColor16 !== None &&
            imageColor12 === lightgreen
          ) {
            setImageColor12(imageColor16);
            setImageColor16(None);
            setHasPiece16(false);
            setHasPiece12(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled2(false);
            setHasMilled6(false);
            setClickStatus16(false);
            setClickStatus12(false);
          } else if (
            hasPiece17 === false &&
            clickStatus17 === true &&
            imageColor16 !== None &&
            imageColor17 === lightgreen
          ) {
            setImageColor17(imageColor16);
            setImageColor16(None);
            setHasPiece16(false);
            setHasPiece17(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled2(false);
            setHasMilled6(false);
            setClickStatus16(false);
            setClickStatus17(false);
          }
          if (imageColor12 === lightgreen && imageColor17 === lightgreen) {
            setImageColor12(None);
            setImageColor16(imageColor16);
            setImageColor17(None);
            setClickStatus12(false);
            setHasPiece12(false);
            setClickStatus17(false);
            setHasPiece17(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor16}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate17 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus17 === true &&
      hasMilled6 === false &&
      hasMilled11 === false &&
      roundColor === imageColor17 &&
      imageColor17 !== (millColor && None)
    ) {
      if (imageColor17 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor17 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected17");
      setHasPiece17(false);
      setImageColor17(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus17(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus17(true);
        if (
          millStatus === true &&
          (imageColor17 === millColor || imageColor17 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece17 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor17(Blue);
          setClickStatus17(false);
        } else if (playerStatus % 2 === 1 && hasPiece17 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor17(Red);
          setClickStatus17(false);
        }
        setHasPiece17(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor17}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus17(true);

        if (imageColor17 === None) {
        } else if (imageColor17 === lightgreen) {
          setImageColor17(green);
        } else if (imageColor16 === green) {
          setImageColor16(None);
        } else if (
          imageColor16 === None &&
          millStatus === false &&
          imageColor17 !== (green || lightgreen)
        ) {
          setImageColor16(green);
        } else if (imageColor17 === green) {
          setImageColor17(lightgreen);
        }

        if (imageColor17 === None) {
        } else if (imageColor17 === lightgreen) {
          setImageColor17(green);
        } else if (imageColor18 === green) {
          setImageColor18(None);
        } else if (
          imageColor18 === None &&
          millStatus === false &&
          imageColor17 !== (green || lightgreen)
        ) {
          setImageColor18(green);
        } else if (imageColor17 === green) {
          setImageColor17(lightgreen);
        }

        if (imageColor17 === None) {
        } else if (imageColor17 === lightgreen) {
          setImageColor17(green);
        } else if (imageColor20 === green) {
          setImageColor20(None);
        } else if (
          imageColor20 === None &&
          millStatus === false &&
          imageColor17 !== (green || lightgreen)
        ) {
          setImageColor20(green);
        } else if (imageColor17 === green) {
          setImageColor17(lightgreen);
        }
        if (roundColor === imageColor17) {
          if (
            millStatus === true &&
            (imageColor17 === millColor || imageColor17 === None)
          ) {
          } else if (
            hasPiece16 === false &&
            clickStatus16 === true &&
            imageColor17 !== None &&
            imageColor16 === lightgreen
          ) {
            setImageColor16(imageColor17);
            setImageColor17(None);
            setHasPiece17(false);
            setHasPiece16(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled6(false);
            setClickStatus17(false);
            setClickStatus16(false);
          } else if (
            hasPiece18 === false &&
            clickStatus18 === true &&
            imageColor17 !== None &&
            imageColor18 === lightgreen
          ) {
            setImageColor18(imageColor17);
            setImageColor17(None);
            setHasPiece17(false);
            setHasPiece18(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled6(false);
            setClickStatus17(false);
            setClickStatus18(false);
          } else if (
            hasPiece20 === false &&
            clickStatus20 === true &&
            imageColor17 !== None &&
            imageColor20 === lightgreen
          ) {
            setImageColor20(imageColor17);
            setImageColor17(None);
            setHasPiece17(false);
            setHasPiece20(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled6(false);
            setClickStatus17(false);
            setClickStatus20(false);
          }
          if (
            imageColor20 === lightgreen &&
            imageColor16 === lightgreen &&
            imageColor18 === lightgreen
          ) {
            setImageColor20(None);
            setImageColor17(imageColor17);
            setImageColor16(None);
            setImageColor18(None);

            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus16(false);
            setHasPiece16(false);
            setClickStatus18(false);
            setHasPiece18(false);
          } else if (
            imageColor20 === lightgreen &&
            imageColor16 === lightgreen
          ) {
            setImageColor20(None);
            setImageColor17(imageColor17);
            setImageColor16(None);
            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus16(false);
            setHasPiece16(false);
          } else if (
            imageColor5 === lightgreen &&
            imageColor18 === lightgreen
          ) {
            setImageColor20(None);
            setImageColor17(imageColor17);
            setImageColor18(None);
            setClickStatus5(false);
            setHasPiece5(false);
            setClickStatus18(false);
            setHasPiece18(false);
          } else if (
            imageColor16 === lightgreen &&
            imageColor18 === lightgreen
          ) {
            setImageColor18(None);
            setImageColor17(imageColor17);
            setImageColor16(None);
            setClickStatus16(false);
            setHasPiece16(false);
            setClickStatus18(false);
            setHasPiece18(false);
          } else if (
            imageColor20 === lightgreen &&
            imageColor18 === lightgreen
          ) {
            setImageColor18(None);
            setImageColor17(imageColor17);
            setImageColor20(None);
            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus18(false);
            setHasPiece18(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor17}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate18 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus18 === true &&
      hasMilled6 === false &&
      hasMilled7 === false &&
      roundColor === imageColor18 &&
      imageColor18 !== (millColor && None)
    ) {
      if (imageColor18 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor18 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected18");
      setHasPiece18(false);
      setImageColor18(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus18(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus18(true);
        if (
          millStatus === true &&
          (imageColor18 === millColor || imageColor18 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece18 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor18(Blue);
          setClickStatus18(false);
        } else if (playerStatus % 2 === 1 && hasPiece18 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor18(Red);
          setClickStatus18(false);
        }
        setHasPiece18(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor18}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus18(true);

        if (imageColor18 === None) {
        } else if (imageColor18 === lightgreen) {
          setImageColor18(green);
        } else if (imageColor13 === green) {
          setImageColor13(None);
        } else if (
          imageColor13 === None &&
          millStatus === false &&
          imageColor18 !== (green || lightgreen)
        ) {
          setImageColor13(green);
        } else if (imageColor18 === green) {
          setImageColor18(lightgreen);
        }

        if (imageColor18 === None) {
        } else if (imageColor18 === lightgreen) {
          setImageColor18(green);
        } else if (imageColor17 === green) {
          setImageColor17(None);
        } else if (
          imageColor17 === None &&
          millStatus === false &&
          imageColor18 !== (green || lightgreen)
        ) {
          setImageColor17(green);
        } else if (imageColor18 === green) {
          setImageColor18(lightgreen);
        }
        if (roundColor === imageColor18) {
          if (
            millStatus === true &&
            (imageColor18 === millColor || imageColor18 === None)
          ) {
          } else if (
            hasPiece13 === false &&
            clickStatus13 === true &&
            imageColor18 !== None &&
            imageColor13 === lightgreen
          ) {
            setImageColor13(imageColor18);
            setImageColor18(None);
            setHasPiece18(false);
            setHasPiece13(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled7(false);
            setHasMilled6(false);
            setClickStatus18(false);
            setClickStatus13(false);
          } else if (
            hasPiece17 === false &&
            clickStatus17 === true &&
            imageColor18 !== None &&
            imageColor17 === lightgreen
          ) {
            setImageColor17(imageColor18);
            setImageColor18(None);
            setHasPiece18(false);
            setHasPiece17(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled7(false);
            setHasMilled6(false);
            setClickStatus18(false);
            setClickStatus17(false);
          }
          if (imageColor13 === lightgreen && imageColor17 === lightgreen) {
            setImageColor13(None);
            setImageColor18(imageColor18);
            setImageColor17(None);
            setClickStatus13(false);
            setHasPiece13(false);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus18(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor18}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate19 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus19 === true &&
      hasMilled10 === false &&
      hasMilled16 === false &&
      roundColor === imageColor19 &&
      imageColor19 !== (millColor && None)
    ) {
      if (imageColor19 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor19 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected19");
      setHasPiece19(false);
      setImageColor19(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus19(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus19(true);
        if (
          millStatus === true &&
          (imageColor19 === millColor || imageColor19 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece19 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor19(Blue);
          setClickStatus19(false);
        } else if (playerStatus % 2 === 1 && hasPiece19 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor19(Red);
          setClickStatus19(false);
        }
        setHasPiece19(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor19}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus19(true);

        if (imageColor19 === None) {
        } else if (imageColor19 === lightgreen) {
          setImageColor19(green);
        } else if (imageColor11 === green) {
          setImageColor11(None);
        } else if (
          imageColor11 === None &&
          millStatus === false &&
          imageColor19 !== (green || lightgreen)
        ) {
          setImageColor11(green);
        } else if (imageColor19 === green) {
          setImageColor19(lightgreen);
        }

        if (imageColor19 === None) {
        } else if (imageColor19 === lightgreen) {
          setImageColor19(green);
        } else if (imageColor20 === green) {
          setImageColor20(None);
        } else if (
          imageColor20 === None &&
          millStatus === false &&
          imageColor19 !== (green || lightgreen)
        ) {
          setImageColor20(green);
        } else if (imageColor19 === green) {
          setImageColor19(lightgreen);
        }
        if (roundColor === imageColor19) {
          if (
            millStatus === true &&
            (imageColor19 === millColor || imageColor19 === None)
          ) {
          } else if (
            hasPiece11 === false &&
            clickStatus11 === true &&
            imageColor19 !== None &&
            imageColor11 === lightgreen
          ) {
            setImageColor11(imageColor19);
            setImageColor19(None);
            setHasPiece19(false);
            setHasPiece11(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled10(false);
            setHasMilled16(false);
            setClickStatus19(false);
            setClickStatus11(false);
          } else if (
            hasPiece20 === false &&
            clickStatus20 === true &&
            imageColor19 !== None &&
            imageColor20 === lightgreen
          ) {
            setImageColor20(imageColor19);
            setImageColor19(None);
            setHasPiece19(false);
            setHasPiece20(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled10(false);
            setHasMilled16(false);
            setClickStatus19(false);
            setClickStatus20(false);
          }
          if (imageColor11 === lightgreen && imageColor20 === lightgreen) {
            setImageColor11(None);
            setImageColor19(imageColor19);
            setImageColor20(None);
            setClickStatus11(false);
            setHasPiece11(false);
            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus19(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor19}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate20 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus20 === true &&
      hasMilled10 === false &&
      hasMilled11 === false &&
      roundColor === imageColor20 &&
      imageColor20 !== (millColor && None)
    ) {
      if (imageColor20 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor20 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected20");
      setHasPiece20(false);
      setImageColor20(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus20(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus20(true);
        if (
          millStatus === true &&
          (imageColor20 === millColor || imageColor20 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece20 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor20(Blue);
          setClickStatus20(false);
        } else if (playerStatus % 2 === 1 && hasPiece20 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor20(Red);
          setClickStatus20(false);
        }
        setHasPiece20(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor20}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus20(true);

        if (imageColor20 === None) {
        } else if (imageColor20 === lightgreen) {
          setImageColor20(green);
        } else if (imageColor19 === green) {
          setImageColor19(None);
        } else if (
          imageColor19 === None &&
          millStatus === false &&
          imageColor20 !== (green || lightgreen)
        ) {
          setImageColor19(green);
        } else if (imageColor20 === green) {
          setImageColor20(lightgreen);
        }

        if (imageColor20 === None) {
        } else if (imageColor20 === lightgreen) {
          setImageColor20(green);
        } else if (imageColor17 === green) {
          setImageColor17(None);
        } else if (
          imageColor17 === None &&
          millStatus === false &&
          imageColor20 !== (green || lightgreen)
        ) {
          setImageColor17(green);
        } else if (imageColor20 === green) {
          setImageColor20(lightgreen);
        }

        if (imageColor20 === None) {
        } else if (imageColor20 === lightgreen) {
          setImageColor20(green);
        } else if (imageColor23 === green) {
          setImageColor23(None);
        } else if (
          imageColor23 === None &&
          millStatus === false &&
          imageColor20 !== (green || lightgreen)
        ) {
          setImageColor23(green);
        } else if (imageColor20 === green) {
          setImageColor20(lightgreen);
        }
        if (imageColor20 === None) {
        } else if (imageColor20 === lightgreen) {
          setImageColor20(green);
        } else if (imageColor21 === green) {
          setImageColor21(None);
        } else if (
          imageColor21 === None &&
          millStatus === false &&
          imageColor20 !== (green || lightgreen)
        ) {
          setImageColor21(green);
        } else if (imageColor20 === green) {
          setImageColor20(lightgreen);
        }
        if (roundColor === imageColor20) {
          if (
            millStatus === true &&
            (imageColor20 === millColor || imageColor20 === None)
          ) {
          } else if (
            hasPiece19 === false &&
            clickStatus19 === true &&
            imageColor20 !== None &&
            imageColor19 === lightgreen
          ) {
            setImageColor19(imageColor20);
            setImageColor20(None);
            setHasPiece20(false);
            setHasMilled10(false);
            setHasMilled11(false);
            setHasPiece19(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus20(false);
            setClickStatus19(false);
          } else if (
            hasPiece17 === false &&
            clickStatus17 === true &&
            imageColor20 !== None &&
            imageColor17 === lightgreen
          ) {
            setImageColor17(imageColor20);
            setImageColor20(None);
            setHasPiece20(false);
            setHasMilled10(false);
            setHasMilled11(false);
            setHasPiece17(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus20(false);
            setClickStatus17(false);
          } else if (
            hasPiece23 === false &&
            clickStatus23 === true &&
            imageColor20 !== None &&
            imageColor23 === lightgreen
          ) {
            setImageColor23(imageColor20);
            setImageColor20(None);
            setHasPiece20(false);
            setHasMilled10(false);
            setHasMilled11(false);
            setHasPiece23(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus20(false);
            setClickStatus23(false);
          } else if (
            hasPiece21 === false &&
            clickStatus21 === true &&
            imageColor20 !== None &&
            imageColor21 === lightgreen
          ) {
            setImageColor21(imageColor20);
            setImageColor20(None);
            setHasPiece20(false);
            setHasMilled10(false);
            setHasMilled11(false);
            setHasPiece21(true);
            setPlayerStatus(playerStatus + 1);
            setClickStatus20(false);
            setClickStatus21(false);
          }
          if (
            imageColor17 === lightgreen &&
            imageColor19 === lightgreen &&
            imageColor23 === lightgreen &&
            imageColor21 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor19(None);
            setImageColor23(None);
            setImageColor21(None);

            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus23(false);
            setHasPiece23(false);
            setClickStatus21(false);
            setHasPiece21(false);
          } else if (
            imageColor17 === lightgreen &&
            imageColor19 === lightgreen &&
            imageColor21 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor19(None);
            setImageColor21(None);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus21(false);
            setHasPiece21(false);
          } else if (
            imageColor23 === lightgreen &&
            imageColor19 === lightgreen &&
            imageColor21 === lightgreen
          ) {
            setImageColor23(None);
            setImageColor20(imageColor20);
            setImageColor19(None);
            setImageColor21(None);
            setClickStatus23(false);
            setHasPiece23(false);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus21(false);
            setHasPiece21(false);
          } else if (
            imageColor17 === lightgreen &&
            imageColor19 === lightgreen &&
            imageColor23 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor19(None);
            setImageColor23(None);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus23(false);
            setHasPiece23(false);
          } else if (
            imageColor17 === lightgreen &&
            imageColor21 === lightgreen &&
            imageColor23 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor21(None);
            setImageColor23(None);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus23(false);
            setHasPiece23(false);
          } else if (
            imageColor17 === lightgreen &&
            imageColor19 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor19(None);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus19(false);
            setHasPiece19(false);
          } else if (
            imageColor17 === lightgreen &&
            imageColor23 === lightgreen
          ) {
            setImageColor17(None);
            setImageColor20(imageColor20);
            setImageColor23(None);
            setClickStatus17(false);
            setHasPiece17(false);
            setClickStatus23(false);
            setHasPiece23(false);
          } else if (
            imageColor19 === lightgreen &&
            imageColor23 === lightgreen
          ) {
            setImageColor19(None);
            setImageColor20(imageColor20);
            setImageColor23(None);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus23(false);
            setHasPiece23(false);
          } else if (
            imageColor19 === lightgreen &&
            imageColor21 === lightgreen
          ) {
            setImageColor19(None);
            setImageColor20(imageColor20);
            setImageColor21(None);
            setClickStatus19(false);
            setHasPiece19(false);
            setClickStatus21(false);
            setHasPiece21(false);
          } else if (
            imageColor21 === lightgreen &&
            imageColor17 === lightgreen
          ) {
            setImageColor21(None);
            setImageColor20(imageColor20);
            setImageColor17(None);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus17(false);
            setHasPiece17(false);
          } else if (
            imageColor21 === lightgreen &&
            imageColor23 === lightgreen
          ) {
            setImageColor21(None);
            setImageColor20(imageColor20);
            setImageColor23(None);
            setClickStatus21(false);
            setHasPiece21(false);
            setClickStatus23(false);
            setHasPiece23(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor20}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate21 = (props) => {
    if (
      millStatus === true &&
      clickStatus21 === true &&
      hasMilled10 === false &&
      hasMilled13 === false &&
      roundColor === imageColor21 &&
      imageColor21 !== (millColor && None)
    ) {
      if (imageColor21 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor21 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected21");
      setHasPiece21(false);
      setImageColor21(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus21(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus21(true);
        if (
          millStatus === true &&
          (imageColor21 === millColor || imageColor21 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece21 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor21(Blue);
          setClickStatus21(false);
        } else if (playerStatus % 2 === 1 && hasPiece21 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor21(Red);
          setClickStatus21(false);
        }
        setHasPiece21(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor21}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus21(true);

        if (imageColor21 === None) {
        } else if (imageColor21 === lightgreen) {
          setImageColor21(green);
        } else if (imageColor14 === green) {
          setImageColor14(None);
        } else if (
          imageColor14 === None &&
          millStatus === false &&
          imageColor21 !== (green || lightgreen)
        ) {
          setImageColor14(green);
        } else if (imageColor21 === green) {
          setImageColor21(lightgreen);
        }

        if (imageColor21 === None) {
        } else if (imageColor21 === lightgreen) {
          setImageColor21(green);
        } else if (imageColor20 === green) {
          setImageColor20(None);
        } else if (
          imageColor20 === None &&
          millStatus === false &&
          imageColor21 !== (green || lightgreen)
        ) {
          setImageColor20(green);
        } else if (imageColor21 === green) {
          setImageColor21(lightgreen);
        }
        if (roundColor === imageColor21) {
          if (
            millStatus === true &&
            (imageColor21 === millColor || imageColor21 === None)
          ) {
          } else if (
            hasPiece14 === false &&
            clickStatus14 === true &&
            imageColor21 !== None &&
            imageColor14 === lightgreen
          ) {
            setImageColor14(imageColor21);
            setImageColor21(None);
            setHasPiece21(false);
            setHasPiece14(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled10(false);
            setHasMilled13(false);
            setClickStatus21(false);
            setClickStatus14(false);
          } else if (
            hasPiece20 === false &&
            clickStatus20 === true &&
            imageColor21 !== None &&
            imageColor20 === lightgreen
          ) {
            setImageColor20(imageColor21);
            setImageColor21(None);
            setHasPiece21(false);
            setHasPiece20(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled10(false);
            setHasMilled13(false);
            setClickStatus21(false);
            setClickStatus20(false);
          }
          if (imageColor14 === lightgreen && imageColor20 === lightgreen) {
            setImageColor14(None);
            setImageColor21(imageColor21);
            setImageColor20(None);
            setClickStatus14(false);
            setHasPiece14(false);
            setClickStatus20(false);
            setHasPiece20(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor21}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate22 = (props) => {
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (
      millStatus === true &&
      clickStatus22 === true &&
      hasMilled4 === false &&
      hasMilled1 === false &&
      roundColor === imageColor22 &&
      imageColor22 !== (millColor && None)
    ) {
      if (imageColor22 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor22 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected22");
      setHasPiece22(false);
      setImageColor22(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus22(false);
    }
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus22(true);
        if (
          millStatus === true &&
          (imageColor22 === millColor || imageColor22 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece22 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor22(Blue);
          setClickStatus22(false);
        } else if (playerStatus % 2 === 1 && hasPiece22 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor22(Red);
          setClickStatus22(false);
        }
        setHasPiece22(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor22}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus22(true);

        if (imageColor22 === None) {
        } else if (imageColor22 === lightgreen) {
          setImageColor22(green);
        } else if (imageColor10 === green) {
          setImageColor10(None);
        } else if (
          imageColor10 === None &&
          millStatus === false &&
          imageColor22 !== (green || lightgreen)
        ) {
          setImageColor10(green);
        } else if (imageColor22 === green) {
          setImageColor22(lightgreen);
        }

        if (imageColor22 === None) {
        } else if (imageColor22 === lightgreen) {
          setImageColor22(green);
        } else if (imageColor23 === green) {
          setImageColor23(None);
        } else if (
          imageColor23 === None &&
          millStatus === false &&
          imageColor22 !== (green || lightgreen)
        ) {
          setImageColor23(green);
        } else if (imageColor22 === green) {
          setImageColor22(lightgreen);
        }
        if (roundColor === imageColor22) {
          if (
            millStatus === true &&
            (imageColor22 === millColor || imageColor22 === None)
          ) {
          } else if (
            hasPiece10 === false &&
            clickStatus10 === true &&
            imageColor22 !== None &&
            imageColor10 === lightgreen
          ) {
            setImageColor10(imageColor22);
            setImageColor22(None);
            setHasPiece22(false);
            setHasPiece10(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled4(false);
            setClickStatus22(false);
            setClickStatus10(false);
          } else if (
            hasPiece23 === false &&
            clickStatus23 === true &&
            imageColor22 !== None &&
            imageColor23 === lightgreen
          ) {
            setImageColor23(imageColor22);
            setImageColor22(None);
            setHasPiece22(false);
            setHasPiece23(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled1(false);
            setHasMilled4(false);
            setClickStatus22(false);
            setClickStatus23(false);
          }
          if (imageColor10 === lightgreen && imageColor23 === lightgreen) {
            setImageColor10(None);
            setImageColor22(imageColor22);
            setImageColor23(None);
            setClickStatus10(false);
            setHasPiece10(false);
            setClickStatus23(false);
            setHasPiece23(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor22}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate23 = (props) => {
    if (
      millStatus === true &&
      clickStatus23 === true &&
      hasMilled11 === false &&
      hasMilled4 === false &&
      roundColor === imageColor23 &&
      imageColor23 !== (millColor && None)
    ) {
      if (imageColor23 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor23 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected23");
      setHasPiece23(false);
      setImageColor23(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus23(false);
    }
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus23(true);
        if (
          millStatus === true &&
          (imageColor23 === millColor || imageColor23 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece23 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor23(Blue);
          setClickStatus23(false);
        } else if (playerStatus % 2 === 1 && hasPiece23 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor23(Red);
          setClickStatus23(false);
        }
        setHasPiece23(true);
      };

      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor23}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus23(true);

        if (imageColor23 === None) {
        } else if (imageColor23 === lightgreen) {
          setImageColor23(green);
        } else if (imageColor22 === green) {
          setImageColor22(None);
        } else if (
          imageColor22 === None &&
          millStatus === false &&
          imageColor23 !== (green || lightgreen)
        ) {
          setImageColor22(green);
        } else if (imageColor23 === green) {
          setImageColor23(lightgreen);
        }

        if (imageColor23 === None) {
        } else if (imageColor23 === lightgreen) {
          setImageColor23(green);
        } else if (imageColor20 === green) {
          setImageColor20(None);
        } else if (
          imageColor20 === None &&
          millStatus === false &&
          imageColor23 !== (green || lightgreen)
        ) {
          setImageColor20(green);
        } else if (imageColor23 === green) {
          setImageColor23(lightgreen);
        }

        if (imageColor23 === None) {
        } else if (imageColor23 === lightgreen) {
          setImageColor23(green);
        } else if (imageColor24 === green) {
          setImageColor24(None);
        } else if (
          imageColor24 === None &&
          millStatus === false &&
          imageColor23 !== (green || lightgreen)
        ) {
          setImageColor24(green);
        } else if (imageColor23 === green) {
          setImageColor23(lightgreen);
        }
        if (roundColor === imageColor23) {
          if (
            millStatus === true &&
            (imageColor23 === millColor || imageColor23 === None)
          ) {
          } else if (
            hasPiece22 === false &&
            clickStatus22 === true &&
            imageColor23 !== None &&
            imageColor22 === lightgreen
          ) {
            setImageColor22(imageColor23);
            setImageColor23(None);
            setHasPiece23(false);
            setHasPiece22(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled4(false);
            setClickStatus23(false);
            setClickStatus22(false);
          } else if (
            hasPiece20 === false &&
            clickStatus20 === true &&
            imageColor23 !== None &&
            imageColor20 === lightgreen
          ) {
            setImageColor20(imageColor23);
            setImageColor23(None);
            setHasPiece23(false);
            setHasPiece20(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled4(false);
            setClickStatus23(false);
            setClickStatus20(false);
          } else if (
            hasPiece24 === false &&
            clickStatus24 === true &&
            imageColor23 !== None &&
            imageColor24 === lightgreen
          ) {
            setImageColor24(imageColor23);
            setImageColor23(None);
            setHasPiece23(false);
            setHasPiece24(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled11(false);
            setHasMilled4(false);
            setClickStatus23(false);
            setClickStatus24(false);
          }
          if (
            imageColor22 === lightgreen &&
            imageColor20 === lightgreen &&
            imageColor24 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor23(imageColor23);
            setImageColor20(None);
            setImageColor24(None);

            setClickStatus22(false);
            setHasPiece22(false);
            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus24(false);
            setHasPiece24(false);
          } else if (
            imageColor22 === lightgreen &&
            imageColor20 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor23(imageColor23);
            setImageColor20(None);
            setClickStatus22(false);
            setHasPiece22(false);
            setClickStatus20(false);
            setHasPiece20(false);
          } else if (
            imageColor22 === lightgreen &&
            imageColor24 === lightgreen
          ) {
            setImageColor22(None);
            setImageColor23(imageColor23);
            setImageColor24(None);
            setClickStatus22(false);
            setHasPiece22(false);
            setClickStatus24(false);
            setHasPiece24(false);
          } else if (
            imageColor20 === lightgreen &&
            imageColor24 === lightgreen
          ) {
            setImageColor24(None);
            setImageColor23(imageColor23);
            setImageColor20(None);
            setClickStatus20(false);
            setHasPiece20(false);
            setClickStatus24(false);
            setHasPiece24(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor23}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };
  const Plate24 = (props) => {
    if (
      millStatus === true &&
      clickStatus24 === true &&
      hasMilled14 === false &&
      hasMilled4 === false &&
      roundColor === imageColor24 &&
      imageColor24 !== (millColor && None)
    ) {
      if (imageColor24 === Red) {
        setRedRemoved(redRemoved + 1);
      } else if (imageColor24 === Blue) {
        setBlueRemoved(blueRemoved + 1);
      }
      console.log("Mill detected24");
      setHasPiece24(false);
      setImageColor24(None);
      setMillStatus(false);

      setTableColor("#bac7e0");
      setClickStatus24(false);
    }
    // IF STATEMENTS THAT CHECK FOR POSITIONS AROUND IT (24 of them) AND REPORT THEIR STATES (IS OCCUPIED)
    if (playerStatus <= 17) {
      const statusChange = () => {
        setClickStatus24(true);
        if (
          millStatus === true &&
          (imageColor24 === millColor || imageColor24 === None)
        ) {
        } else if (playerStatus % 2 === 0 && hasPiece24 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor24(Blue);
          setClickStatus24(false);
        } else if (playerStatus % 2 === 1 && hasPiece24 === false) {
          setPlayerStatus(playerStatus + 1);

          setImageColor24(Red);
          setClickStatus24(false);
        }
        setHasPiece24(true);
      };
      return (
        <div class="Piece">
          <div onClick={() => statusChange()}>
            <img class="PieceImage" src={`${imageColor24}`} alt="piece_png" />
          </div>
        </div>
      );
    } else {
      const isPositionOccupied = () => {
        setClickStatus24(true);

        if (imageColor24 === None) {
        } else if (imageColor24 === lightgreen) {
          setImageColor24(green);
        } else if (imageColor15 === green) {
          setImageColor15(None);
        } else if (
          imageColor15 === None &&
          millStatus === false &&
          imageColor24 !== (green || lightgreen)
        ) {
          setImageColor15(green);
        } else if (imageColor24 === green) {
          setImageColor24(lightgreen);
        }

        if (imageColor24 === None) {
        } else if (imageColor24 === lightgreen) {
          setImageColor24(green);
        } else if (imageColor23 === green) {
          setImageColor23(None);
        } else if (
          imageColor23 === None &&
          millStatus === false &&
          imageColor24 !== (green || lightgreen)
        ) {
          setImageColor23(green);
        } else if (imageColor24 === green) {
          setImageColor24(lightgreen);
        }
        if (roundColor === imageColor24) {
          if (
            millStatus === true &&
            (imageColor24 === millColor || imageColor24 === None)
          ) {
          } else if (
            hasPiece15 === false &&
            clickStatus15 === true &&
            imageColor24 !== None &&
            imageColor15 === lightgreen
          ) {
            setImageColor15(imageColor24);
            setImageColor24(None);
            setHasPiece24(false);
            setHasPiece15(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled14(false);
            setHasMilled4(false);
            setClickStatus24(false);
            setClickStatus15(false);
          } else if (
            hasPiece23 === false &&
            clickStatus23 === true &&
            imageColor24 !== None &&
            imageColor23 === lightgreen
          ) {
            setImageColor23(imageColor24);
            setImageColor24(None);
            setHasPiece24(false);
            setHasPiece23(true);
            setPlayerStatus(playerStatus + 1);
            setHasMilled14(false);
            setHasMilled4(false);
            setClickStatus24(false);
            setClickStatus23(false);
          }
          if (imageColor15 === lightgreen && imageColor23 === lightgreen) {
            setImageColor15(None);
            setImageColor24(imageColor24);
            setImageColor23(None);
            setClickStatus15(false);
            setHasPiece15(false);
            setClickStatus23(false);
            setHasPiece23(false);
          }
        } else {
        }
      };
      return (
        <div class="Piece">
          <div onClick={() => isPositionOccupied()}>
            <img class="PieceImage" src={`${imageColor24}`} alt="piece_png" />
          </div>
        </div>
      );
    }
  };

  // useEffect(() => {
  //   setPlayerStatus(playerStatus + 1);
  // }, [counter]);
  const Player = () => {
    if (playerStatus > 17) {
      setRoundStatus(2);
    }
    if (victor === "Blue") {
      return <div>BLUE HAS WON!</div>;
    }
    if (victor === "Red") {
      return <div>RED HAS WON!</div>;
    }
    if (playerStatus % 2 === 0) {
      setPlayerController(2);
      setRoundColor(Blue);
      console.log(playerController);

      return <div>Player 1, Part {roundStatus}</div>;
    } else {
      setPlayerController(1);
      setRoundColor(Red);

      console.log(playerController);

      return <div>Player 2, Part {roundStatus}</div>;
    }
  };

  //each box is a component
  //will passively check if conditions are met (if pieces can be put on)
  //onClick -> adds a piece/selects a piece
  //states: travelState, gameState (round 1, 2, end), placeState</div>)
  const finalState = () => {
    return (
      <div>
        <header className="App-header">9 Man's Morris: Crazy Mills</header>
        <div class="gameStats">
          <div>Player 1: Blue; Captured {blueRemoved} Men</div>
          <div>Player 2: Red; Captured {redRemoved} Men</div>
          <div>
            <Player />
            Move: {playerStatus}
          </div>
        </div>
        <div class="TableContainer"></div>
        <div>
          <table class="Table" style={{ backgroundColor: tableColor }}>
            <tr>
              <td
              // onClick={() => {
              //   setCounter(counter + 1);
              // }}
              >
                1
                <Plate1 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                2
                <Plate2 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                3
                <Plate3 />
              </td>
            </tr>
            <tr>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td>
                4
                <Plate4 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                5
                <Plate5 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                6
                <Plate6 />
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
            </tr>
            <tr>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td>
                7
                <Plate7 />
              </td>
              <td>
                8
                <Plate8 />
              </td>
              <td>
                9
                <Plate9 />
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
            </tr>
            <tr>
              <td>
                10
                <Plate10 />
              </td>
              <td>
                11
                <Plate11 />
              </td>
              <td>
                12
                <Plate12 />
              </td>
              <td></td>
              <td>
                13
                <Plate13 />
              </td>
              <td>
                14
                <Plate14 />
              </td>
              <td>
                15
                <Plate15 />
              </td>
            </tr>
            <tr>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td>
                16
                <Plate16 />
              </td>
              <td>
                17
                <Plate17 />
              </td>
              <td>
                18
                <Plate18 />
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
            </tr>

            <tr>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
              <td>
                19
                <Plate19 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                20
                <Plate20 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                21
                <Plate21 />
              </td>
              <td class="horizContainer">
                <div class="horizDiv"></div>
              </td>
            </tr>

            <tr>
              <td>
                22
                <Plate22 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                23
                <Plate23 />
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td class="vertContainer">
                <div class="vertDiv"></div>
              </td>
              <td>
                24
                <Plate24 />
              </td>
            </tr>
          </table>
        </div>
        <div class="RuleButton">
          <button onClick={() => setSeeButton(seeButton + 1)}>
            See the rules:
          </button>
          {seeButton % 2 === 0 && (
            <div>
              <div>
                The basic aim of Nine Mens Morris is to make "mills" - vertical
                or horizontal lines of three in a row. Every time this is
                achieved, an opponent's piece is removed, the overall objective
                being to reduce the number of opponent's men to less than three
                or to render the opponent unable to play. In the first part, the
                players must place down men one by one until each player has
                placed down 9 of their own men. From then on, in the second
                part, each player takes turns moving their men to create mills
                and capture their opponents' men.
              </div>
              <div>
                Move your men by tapping their respective circle, and the areas
                they can move to will be highlighted in green. Tap the green
                circle to confirm your move, and then tap the man to move him to
                that circle. If you would like to cancel the move, simply click
                on the man before tapping the green circle. If you form a mill,
                click on an opponent's man to capture. You cannot capture men in
                mills.
              </div>
              <div>
                If you form a mill, the screen will turn yellow. You will either
                be able to select a man to capture, or an event will occur where
                men will randomly be captured - either yours or the enemies'.
              </div>
            </div>
          )}
        </div>
        <header className="App-header">Created by Kevin Liu</header>
      </div>
    );
  };
  return finalState();
}

export default App;
