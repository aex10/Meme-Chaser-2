//Meme Chaser 2 v1.2 Code
//Start
var PlayerName = "unnamed";
Intro();
Game();
//Main Algorithm
function Game() {
  ClickerGame();
  OptionsGUI();
  AboutGUI();
  RestartGame();
  CriticalError();
  Shop_Function();
  options_function();
  options_graphics();
  options_drm();
  StoreEnding();
  open_up_ending();
  after_credits();
  ShopGUI();
  onEvent("start", "click", function(){
  ShortCut();
  setScreen("Mainscreen");
  stopSound("assets/Second Dream.mp3");
  playSound("assets/Getsix_Daydreamers_short.mp3", false);
  setTimeout(function() {
    hideElement("mainhint");
  }, 5000);
  });
  onEvent("mainmenu", "click", function(){
  stopSound("assets/vhs-tape-break.mp3", false);
  playSound("assets/Second Dream.mp3") ;
  setScreen("StartScreen");
  ResetClickerGame();
  });
  onEvent("playagain", "click", function(){
  stopSound("assets/vhs-tape-break.mp3", false);
  setScreen("Mainscreen");
  playSound("assets/Getsix_Daydreamers_short.mp3", false);
  ResetClickerGame();
  });
  onEvent("enable_dev_console", "mouseup", function() {
    impulse();
    var console = prompt("Requesting User Input");
    if (console == "sv_cheats 1" ) {
      showElement("impulse_yes");
      showElement("impulse_no");
      showElement("close_impulse");
      showElement("impulse_popup");
      showElement("impulse_no");
    } else {
      showElement("invalid_popup");
      showElement("close_invalid");
      onEvent("close_invalid", "click", function() {
        hideElement("invalid_popup");
        hideElement("close_invalid");
      });
      onEvent("close_impulse", "click", function() {
        hideElement("impulse_yes");
        hideElement("impulse_no");
        hideElement("close_impulse");
        hideElement("impulse_popup");
        hideElement("impulse_no");
      });
    }
  });
}
//Sub Algorithm 1
function ClickerGame() {
 var score = 0;
 var lives = 3;
 onEvent("Mainbackground", "click", function(){
    lives = lives - 1;
    setText("liveslabel", lives);
    if (lives === 0) {
      setScreen("Gameover");
      playSound("assets/vhs-tape-break.mp3", false);
      stopSound("assets/Getsix_Daydreamers_short.mp3");
    }
  });
 onEvent("meme1", "click", function(){
  setPosition("meme1", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme2", "click", function(){
  setPosition("meme2", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme3", "click", function(){
  setPosition("meme3", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme4", "click", function(){
  setPosition("meme4", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme5", "click", function(){
  setPosition("meme5", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme6", "click", function(){
  setPosition("meme6", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
 onEvent("meme7", "click", function(){
  setPosition("meme7", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score = score + 1;
  setText("scorelabel", score);
  if (score == 15) {
    level2();
  }
  if (score == 30) {
    level3();
  }
  if (score == 45) {
    level4();
  }
  if (score == 50) {
    level5();
  }
  });
}
//Sub Algorithm 2
function ResetClickerGame() {
  var score2 = 0;
  var lives2 = 3;
  onEvent("Mainbackground", "click", function(){
    lives2 = lives2 - 1;
    setText("liveslabel2", lives2);
    if (lives2 === 0) {
      setScreen("Gameover");
      playSound("assets/vhs-tape-break.mp3", false);
      stopSound("assets/Getsix_Daydreamers_short.mp3");
    }
  });
  hideElement("liveslabel");
  hideElement("scorelabel");
  showElement("liveslabel2");
  showElement("scorelabel2");
  setText("scorelabel2", score2);
  setText("liveslabel2", lives2);
  setImageURL("Mainbackground", "assets/level3.gif");
  setText("levellabel", "Level 1");
  hideElement("brake1");
  hideElement("brake2");
  hideElement("brake3");
  hideElement("brake4");
  hideElement("brake5");
  hideElement("brake6");
  hideElement("brake7");
  setPosition("meme1", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme2", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme3", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme4", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme5", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme6", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  setPosition("meme7", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  onEvent("meme1", "click", function(){
  setPosition("meme1", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme2", "click", function(){
  setPosition("meme2", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme3", "click", function(){
  setPosition("meme3", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme4", "click", function(){
  setPosition("meme4", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme5", "click", function(){
  setPosition("meme5", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme6", "click", function(){
  setPosition("meme6", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 15) {
    level2();
  }
  if (score2 == 30) {
    level3();
  }
  if (score2 == 45) {
    level4();
  }
  if (score2 == 50) {
    level5();
  }
  });
  onEvent("meme7", "click", function(){
  setPosition("meme7", randomNumber(25, 250), randomNumber(25, 250), 100, 100);
  score2 = score2 + 1;
  setText("scorelabel2", score2);
  if (score2 == 30) {
    level2();
  }
  if (score2 == 60) {
    level3();
  }
  if (score2 == 90) {
    level4();
  }
  if (score2 == 100) {
    level5();
  }
  });
}
//Abstraction
function stopallsounds() {
var stopsounds = 0;
stopsounds = stopsounds +1;
if (stopsounds === 0) {
  allowSound();
} else {
  stopSound("assets/Getsix_Daydreamers_short.mp3");
  stopSound("assets/Second Dream.mp3");
  stopSound("assets/NINTENDO_Mii_THEME_Trap_Remix.mp3");
  stopSound("assets/FBI_open_up.mp3");
  stopSound("assets/Joel_Nielsen_Black_Mesa_Soundtrack_End_Credits_Part_1.mp3");
  stopSound("assets/For Sam, For Us.mp3");
  stopSound("assets/ue4.mp3");
  stopSound("assets/vhs-tape-break.mp3");
  stopSound("assets/gamebrake.mp3");
}
}
function allowSound() {
  playSound("", false);
}
//Intros
function Intro() {
  hideElement("jsflare");
  hideElement("screenflare");
  setTimeout(function() {
    setScreen("intro2");
    playSound("assets/vhs_in2.mp3", false);
  }, 2500);
  setTimeout(function() {
    setScreen("intro3");
  }, 5500);
  setTimeout(function() {
    setScreen("intro4");
  }, 7500);
  setTimeout(function() {
    setScreen("intro5");
    playSound("assets/ue4.mp3", false);
  }, 9500);
  setTimeout(function() {
    showElement("jsflare");
    showElement("screenflare");
  }, 10400);
  setTimeout(function() {
    setScreen("intro6");
  }, 11700);
  setTimeout(function() {
    playSound("assets/introstatic1.mp3", false);
    setScreen("intro7");
    playSound("assets/Second Dream.mp3", true);
  }, 15500);
  setTimeout(function() {
    setScreen("StartScreen");
    stopSound("assets/introstatic1.mp3");
  }, 16500);
  setTimeout(function() {
    PlayerName = prompt("Enter your name!");
  }, 16600);
  setTimeout(function() {
    setText("rating", "10/10 - " +PlayerName);
  }, 23000);
}
//Shop GUI
function ShopGUI() {
  onEvent("shopback", "click", function() {
    setScreen("StartScreen");
    stopSound("assets/NINTENDO_Mii_THEME_Trap_Remix.mp3");
    playSound("assets/Second Dream.mp3");
  });
  onEvent("shop", "click", function() {
    setScreen("Shop");
    playSound("assets/NINTENDO_Mii_THEME_Trap_Remix.mp3", true);
    stopSound("assets/Second Dream.mp3");
  });
  onEvent("shopback", "click", function() {
    setScreen("StartScreen");
  });
}
//Options GUI
function OptionsGUI() {
  onEvent("settingsback", "click", function() {
    setScreen("StartScreen");
  });
  onEvent("options", "click", function() {
    setScreen("settings");
  });
}
//About GUI
function AboutGUI() {
  onEvent("about", "click", function() {
    setScreen("aboutscreen");
  });
  onEvent("aboutback", "click", function() {
    setScreen("StartScreen");
  });
}
//Levels
function level2() {
  setText("levellabel", "Level 2");
  setImageURL("Mainbackground", "assets/level2.gif");
}
function level3() {
  setText("levellabel", "Level 3");
  setImageURL("Mainbackground", "assets/level1.gif");
}
function level4() {
  showElement("brake1");
  showElement("brake2");
  showElement("brake3");
  showElement("brake5");
  showElement("brake6");
  showElement("brake7");
}
//Game Crash
function level5() {
  stopSound("assets/Getsix_Daydreamers_short.mp3") ;
  showElement("brake4");
  setTimeout(function() {
    setScreen("game_error");
    playSound("assets/vhs_out.mp3", false);
  }, 1000);
}
//Restart Game
function RestartGame() {
  onEvent("restartgame", "click", function() {
    setScreen("debugconsole");
    setTimeout(function() {
      showElement("loadingcode2");
    }, 1000);
    setTimeout(function() {
      showElement("loadingcode3");
    }, 2000);
    setTimeout(function() {
      showElement("loadingcode4");
    }, 3000);
    setTimeout(function() {
      showElement("loadingcode5");
    }, 4000);
    setTimeout(function() {
      showElement("loadingcode6");
    }, 5000);
    setTimeout(function() {
      showElement("loadingcode7");
    }, 6000);
    setTimeout(function() {
      showElement("loadingcode8");
    }, 7000);
    setTimeout(function() {
      showElement("loadingcode9");
    }, 8000);
    setTimeout(function() {
      showElement("loadingcode10");
    }, 9000);
    setTimeout(function() {
      fakeintro();
    }, 9500);
  });
}
//Broken Intro
function fakeintro() {
  setScreen("fakeintro1");
  stopSound("assets/vhs_out.mp3");
  setTimeout(function() {
    setScreen("fakeintro2");
    playSound("assets/editing_vhs.mp3", false);
  }, 3000);
  setTimeout(function() {
    setScreen("fakeintro3");
  }, 6000);
  setTimeout(function() {
    setScreen("fakeintro4");
  }, 9000);
  setTimeout(function() {
    setScreen("fakeintro5");
  }, 12000);
  setTimeout(function() {
    setScreen("fakeintro6");
  }, 14500);
  setTimeout(function() {
    stopSound("assets/editing_vhs.mp3");
    playSound("assets/introstatic1.mp3", false);
    setScreen("fakeintro7");
  }, 17500);
  setTimeout(function() {
    setScreen("fakestartscreen");
    stopSound("assets/introstatic1.mp3");
    playSound("assets/gamebrake.mp3", false);
  }, 18500);
  setTimeout(function() {
    PlayerName = prompt("^&*$#)(80934043func)9//,']");
  }, 18600);
}
function CriticalError() {
  onEvent("fakestart", "click", function() {
    setScreen("fakemainscreen");
    setTimeout(function() {
      setImageURL("fakescreenbackground", "assets/level2.gif");
    }, 1000);
    setTimeout(function() {
      setImageURL("fakescreenbackground", "assets/level1.gif");
    }, 3000);
    setTimeout(function() {
      setImageURL("fakescreenbackground", "assets/vapor.gif");
    }, 5000);
    setTimeout(function() {
      setScreen("safe-dev_reset");
      ShortCut2();
    }, 7000);
  });
  onEvent("dev_reco", "click", function() {
    setScreen("recovery_options");
  });
  function Cont() {
    setScreen("fakestartscreen");
    playSound("assets/gamebrake.mp3", false);
  }
  onEvent("continue", "click", function() {
    Cont();
  });
  onEvent("repair_game", "click", function() {
    showElement("exiterror_0x80");
    showElement("errorpopup1");
  });
  onEvent("exiterror_0x80", "click", function() {
    hideElement("exiterror_0x80");
    hideElement("errorpopup1");
  });
  onEvent("boot_rom", "click", function() {
    showElement("exit_error2");
    showElement("errorpopup2");
  });
  onEvent("exit_error2", "click", function() {
    hideElement("exit_error2");
    hideElement("errorpopup2");
  });
  onEvent("reset_game", "click", function() {
    stopSound("assets/gamebrake.mp3");
    reset_game();
  });
}
//Shortcut
function ShortCut() {
  onEvent("gameovershort", "click", function() {
    stopSound("assets/vhs-tape-break.mp3", false);
    stopSound("assets/gamebrake.mp3");
    setScreen("game_error");
  });
}
function ShortCut2() {
  onEvent("shut_down", "click", function() {
    reset_game();
  });
}
//Main Ending
function reset_game() {
  stopSound("assets/gamebrake.mp3");
  setScreen("Reset_game");
  setTimeout(function() {
    setScreen("Finalreset");
  }, 3000);
  setTimeout(function() {
    FinalReset_seq();
  }, 3000);
}
function FinalReset_seq() {
  playSound("assets/For Sam, For Us.mp3", false);
  setTimeout(function() {
    showElement("final1");
  }, 1000);
  setTimeout(function() {
    showElement("final2");
  }, 3000);
  setTimeout(function() {
    showElement("final3");
  }, 6000);
  setTimeout(function() {
    showElement("final4");
  }, 9000);
  setTimeout(function() {
    showElement("final5");
  }, 11000);
  setTimeout(function() {
    showElement("final6");
  }, 14000);
  setTimeout(function() {
    showElement("final7");
  }, 17000);
  setTimeout(function() {
    showElement("final8");
  }, 20000);
  setTimeout(function() {
    showElement("final9");
  }, 23000);
  setTimeout(function() {
    setScreen("Finalchoice");
    delete_seq();
  }, 26000);
}
function delete_seq() {
  onEvent("final14_delete", "click", function() {
    stopSound("assets/For Sam, For Us.mp3");
    setScreen("Final_delete");
    delete_good();
  });
  onEvent("final16_finish", "click", function() {
    stopSound("assets/For Sam, For Us.mp3");
    setScreen("Final_finish");
    finish_bad();
  });
}
function delete_good() {
  setScreen("Final_delete");
  setTimeout(function() {
    showElement("loggingout");
  }, 1000);
  setTimeout(function() {
    Credits();
  }, 3000);
}
function finish_bad() {
  setScreen("Final_finish");
  setTimeout(function() {
    showElement("nothing");
  }, 1000);
  setTimeout(function() {
    Credits();
  }, 3000);
}
//Credits
function Credits() {
  setScreen("Credits1");
  playSound("assets/Joel_Nielsen_Black_Mesa_Soundtrack_End_Credits_Part_1.mp3", false);
  setTimeout(function() {
    setScreen("Credits2");
  }, 10000);
  setTimeout(function() {
    setScreen("Credits3");
  }, 20000);
  setTimeout(function() {
    setScreen("Credits4");
  }, 30000);
  setTimeout(function() {
    setScreen("Credits5");
  }, 40000);
  setTimeout(function() {
    setScreen("Credits6");
  }, 50000);
  stopallsounds();
}
//DLC
function Shop_Function() {
  onEvent("buy1", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy2", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy3", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy4", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy5", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy6", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy7", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy8", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy9", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy10", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("buy11", "click", function() {
    showElement("shop_popup");
    showElement("close_meme_popup");
    showElement("buy_more_memes");
  });
  onEvent("close_meme_popup", "click", function() {
    hideElement("shop_popup");
    hideElement("close_meme_popup");
    hideElement("buy_more_memes");
  });
  onEvent("buy_more_memes", "click", function() {
    setScreen("BuyMemes");
  });
}
//Options
function options_function() {
  onEvent("edgy", "mouseup", function() {
    showElement("close_settings_popup");
    showElement("settings_popup");
    onEvent("close_settings_popup", "click", function() {
      hideElement("close_settings_popup");
      hideElement("settings_popup");
    });
  });
  onEvent("offensive", "mouseup", function() {
    showElement("close_settings_popup");
    showElement("settings_popup");
    onEvent("close_settings_popup", "click", function() {
      hideElement("close_settings_popup");
      hideElement("settings_popup");
    });
  });
  onEvent("fresh", "mouseup", function() {
    showElement("buy_memes_popup");
    showElement("buy_more_memes");
    showElement("close_buy_memes");
    showElement("meme_shop_button");
  });
  onEvent("obscure", "mouseup", function() {
    showElement("buy_memes_popup");
    showElement("buy_more_memes");
    showElement("close_buy_memes");
    showElement("meme_shop_button");
  });
  onEvent("spicy", "mouseup", function() {
    showElement("buy_memes_popup");
    showElement("buy_memes_popup");
    showElement("close_buy_memes");
    showElement("meme_shop_button");
  });
  onEvent("edgy", "click", function() {
    showElement("buy_memes_popup");
    showElement("buy_memes_popup");
    showElement("close_buy_memes");
    showElement("meme_shop_button");
  });
  onEvent("close_buy_memes", "mouseup", function() {
    hideElement("buy_memes_popup");
    hideElement("buy_memes_popup");
    hideElement("close_buy_memes");
    hideElement("meme_shop_button");
  });
  onEvent("meme_shop_button", "click", function() {
    setScreen("Shop");
  });
  onEvent("subtitles", "mouseup", function() {
    showElement("subtitles_label");
    showElement("subtitles_label2");
    showElement("subtitles_label3");
  });
  onEvent("MLG_mode", "mouseup", function() {
    showElement("close_mlg");
    showElement("mlg_popup");
    showElement("mlg_shop");
  });
  onEvent("close_mlg", "click", function() {
    hideElement("mlg_popup");
    hideElement("mlg_shop");
    hideElement("close_mlg");
  });
  onEvent("mlg_shop", "click", function() {
    setScreen("Shop");
  });
}
//sv_ending
function impulse() {
  onEvent("impulse_no", "click", function() {
    stopallsounds();
    setScreen("vacbannedxd");
  });
  onEvent("impulse_yes", "click", function() {
    stopallsounds();
    setScreen("sv_cheats_op");
  });
}
//Graphics Ending
function options_graphics() {
  onEvent("graphics", "mouseup", function() {
    stopallsounds();
    showElement("screeneffect_1");
    showElement("screeneffect_2");
    showElement("screeneffect_3");
    showElement("screeneffect_4");
    showElement("screeneffect_5");
    showElement("screeneffect_6");
    showElement("screeneffect_7");
    showElement("screeneffect_8");
    showElement("screeneffect_9");
    showElement("screeneffect_10");
    setTimeout(function() {
      setScreen("benchmark");
    }, 6000);
  });
}
//DRM Ending
function options_drm() {
  onEvent("drm", "mouseup", function() {
    stopallsounds();
    setScreen("login_to_steam");
  });
  onEvent("drm_login", "click", function() {
    showElement("drm_popup");
    showElement("drm_close");
    showElement("drm_back");
    setText("drm_password", "");
    setText("drm_username", "");
    showElement("understandable");
  });
  onEvent("drm_back", "click", function() {
    hideElement("drm_popup");
    hideElement("drm_close");
    hideElement("drm_back");
  });
  onEvent("drm_close", "click", function() {
    hideElement("drm_popup");
    hideElement("drm_close");
    hideElement("drm_back");
  });
}
//Store Ending
function StoreEnding() {
  onEvent("buy_store1", "click", function() {
    stopallsounds();
    setScreen("out_of_money");
  });
  onEvent("buy_store2", "click", function() {
    stopallsounds();
    setScreen("out_of_money");
  });
  onEvent("buy_store3", "click", function() {
    stopallsounds();
    setScreen("out_of_money");
  });
  onEvent("buy_store4", "click", function() {
    stopallsounds();
    setScreen("out_of_money");
  });
  onEvent("buy_store5", "click", function() {
    stopallsounds();
    setScreen("out_of_money");
  });
  onEvent("f", "click", function() {
    showElement("ea_popup");
    showElement("money");
    playSound("assets/Mission_Failed_Well_Get_Him_Next_Time.mp3", false);
  });
}
function after_credits() {
  onEvent("rate_mc2_game", "click", function() {
    setScreen("rate_mc2.wad");
    rategamexd();
  });
}
function rategamexd() {
  var rategame = prompt("How would you rate Meme Chaser 2 on a scale from 1 - 10?");
  var rating = (("You gave Meme Chaser 2 a " +rategame)+ " out of 10!");
  setTimeout(function() {
    setText("rating_label", rating);
  }, 1000);
  onEvent("no_u", "click", function() {
    showElement("egg");
    showElement("jetpack");
    showElement("rating_label");
    setTimeout(function() {
      stopallsounds();
      setScreen("static");
      playSound("assets/vhs_out.mp3", false);
    }, 3000);
  });
}
//Open Up Ending 
function open_up_ending() {
  onEvent("close_anime", "click", function() {
    hideElement("buy_anime");
    hideElement("anime_popup");
    hideElement("close_anime");
  });
  onEvent("buy_anime", "click", function() {
    stopSound("assets/NINTENDO_Mii_THEME_Trap_Remix.mp3");
    stopSound("assets/Second Dream.mp3");
    setScreen("open_up");
    playSound("assets/FBI_open_up.mp3", false);
    setTimeout(function() {
      stopSound("assets/NINTENDO_Mii_THEME_Trap_Remix.mp3");
      stopSound("assets/Second Dream.mp3");
      setScreen("ded");
    }, 2000);
    setTimeout(function() {
      playSound("assets/Metal_Gear_Solid_V_-_Sins_of_The_Father.mp3", false);
    }, 4000);
  });
}
//add cheeki breeki
//Acknowledgments 
//All assets and images belong to their respective owners.
//This game is a  work of fiction, any relation to any company, product or brand is purely coincidental. 
