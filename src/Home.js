import React, { useEffect, useRef } from "react";
import image1 from "./assets/images/AppMusic.png";
import image2 from "./assets/images/AppSpotify.png";
import image3 from "./assets/images/AppDoppler.png";
import image4 from "./assets/images/search image.png";
import image9 from "./assets/images/ThemeUI.png";
import image10 from "./assets/images/ThemeUIActive.png";
import image11 from "./assets/images/ThemeExport.png";
import image12 from "./assets/images/ThemeFile11.png";
import image13 from "./assets/images/ThemeIcon@3x.png";
import image14 from "./assets/images/midimage.png";
import image15 from "./assets/images/IconArrayArtwork.png";
import image16 from "./assets/images/IconArrayTrack.png";
import image17 from "./assets/images/icon2.png";
import image18 from "./assets/images/icon3.png";
import image19 from "./assets/images/Artwork1.jpg";
import image20 from "./assets/images/Artwork2.jpg";
import image21 from "./assets/images/Artwork3.jpg";
import image22 from "./assets/images/Typography1.jpg";
import image23 from "./assets/images/Typography2.jpg";
import image24 from "./assets/images/last1.png";
import image25 from "./assets/images/last2.png";
import bgimg from "./assets/images/BACKGOUND-img.png"

function Home() {
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  useEffect(() => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    const handleScroll = (source, target) => {
      return () => {
        target.scrollTop = source.scrollTop;
        target.scrollLeft = source.scrollLeft;
      };
    };

    div1.addEventListener("scroll", handleScroll(div1, div2));
    div2.addEventListener("scroll", handleScroll(div2, div1));

    return () => {
      div1.removeEventListener("scroll", handleScroll(div1, div2));
      div2.removeEventListener("scroll", handleScroll(div2, div1));
    };
  }, []);

  return (
    <div className="home">

      <h1>
        Sleeve <span style={{fontWeight:"200"}}>2</span>
      </h1>
      <h4>The ultimate music accessory for your Mac.</h4>
      <br></br>

      <p style={{ fontSize: "26px", textAlign: "center" }}>
        <span>
          Sleeve sits on the desktop, displaying and controlling the music
          you’re{" "}
        </span>
        <br />
        currently playing in
        <img src={image1} height={25} width={25} alt="music img"></img>
        Apple Music,
        <img src={image2} height={25} width={25} alt="spotify"></img>Spotify,
        and
        <img src={image3} height={25} width={25} alt="Doppler"></img>Doppler.
      </p>
      <br />
      <br></br>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          marginLeft: "540px",
        }}
      >
        <div
          className="homediv1"
          style={{
            border: "1px solid white",
            height: "38px",
            width: "180px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            textAlign:"center",
            marginTop:"5px"
          }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg"
            height={25}
            width={25}
            alt="appleimg"
            style={{marginTop:"5px"}}
          ></img>
         <span style={{marginTop:"-25px"}}>Mac App Store</span> 
        </div>
        <div
          className="homediv2"
          style={{
            border: "0.5px solid black",
            height: "38px",
            width: "180px",
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
            textAlign:"center",
            marginTop:"5px"
          }}
        >
          Buy Directly
          <button
            style={{
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              marginLeft: "10px",
              height: "25px",
              width: "50px",
              cursor: "pointer",
              marginTop:"10px"
            }}
          >
            $5.99
            
          </button>
        </div>
      </div>
      <br></br>
      <p style={{ color: "rgb(90, 89, 89)", textAlign: "center" }}>
        No subscriptions. No in-app <br /> purchases. Requires macOS 11 Big Sur{" "}
        <br /> or later.
      </p>
      <br></br>
      <br></br>
      <div
        className="homediv3"
        style={{
          border: "0.5px solid black",
          height: "40px",
          width: "600px",
          borderRadius: "20px",
          display: "flex",
          marginLeft: "470px",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img
            src={image4}
            alt="div"
            height={65}
            width={65}
            style={{ marginTop: "-10px" }}
          ></img>
        </div>
        <div>
          <span style={{ padding: "10px", color: "black", marginTop: "30px" }}>
            Now with shelves and a progress bar.See what's new in Sleeve 2.3
            <span style={{ marginLeft: "20px", marginTop: "50px" }}>
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="text-gray-400 flex-shrink-0"
              >
                <path
                  d="M10 .25C4.615.25.25 4.615.25 10a9.75 9.75 0 0 0 19.5 0c0-5.385-4.365-9.75-9.75-9.75Zm0 1.5a8.25 8.25 0 1 1 0 16.5 8.25 8.25 0 0 1 0-16.5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="m10.75 13 3-3m0 0-3-3m3 3h-7.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </span>
        </div>
      </div>

      <br />
      <br />
      <br />
      <p style={{ color: "rgba(59,130,246,2.5)", textAlign: "center" }}>
        NEW IN{" "}
        <button
          style={{
            height: "20px",
            width: "40px",
            borderRadius: "10px",
            border: "none",
            backgroundColor:"rgba(59,130,246,2.5)",
            marginLeft: "5px",
          }}
        >
          2.0
        </button>
        <br />
      </p>
      <br />
      <br></br>
      <h4>Themes. Unlimited themes.</h4>
      <br></br>
      <p style={{ color: "black", fontSize: "25px", textAlign: "center" }}>
        Themes in Sleeve make creating and switching between customizations
        easy. Share your own
        <br /> creations with friends and install as many themes as you like
        with just a double-click.
      </p>
      <br />

      <div className="bg1">
        <img src={bgimg} alt='img' height={360} width={1189} style={{borderRadius:"20px",marginLeft:"50px"}}></img>

        

        {/* Features section */}
        <div style={{ display: "flex", marginTop: "28rem",marginLeft:"19px" }}>
          <div className="featurediv1">
            <h2>Change it up</h2>
            <p>Switch between themes <br></br>with just a click.</p>
            <p>
              Modify the built-in themes <br></br>or create your own using <br></br>Sleeve’s
              extensive <br></br>preferences.
            </p>
           
            <img src={image10} className="fmg2"></img>
            <img src={image9} className="fmg3"></img>
            <img src={image13} className="fmg1"></img>
          </div>

          <div className="featurediv2">
            <h2>Shareable</h2>
            <p>
              Export your themes and share them with friends using the handy new
              Sleeve Theme file format.
            </p>
            <p>
              Install themes from anywhere with a double-click or a drag and
              drop.
            </p>

            <img src={image11} className="fmg4"></img>
            <img src={image12} className="fmg5"></img>
          </div>
        </div>

        {/** mid section */}
        {/* CUSTOMIZATION */}

        <div style={{marginTop:"900px",marginLeft:"-1250px"}}>
            <h5 style={{color:"blueviolet", textAlign:"center",fontWeight:"bold",fontSize:"500"}}>CUSTOMIZATION</h5>
            <br></br>
            <br></br>
            <h4 style={{textAlign:"center"}}>Countless ways to customize.</h4>
            <p style={{fontSize:"26px",marginTop:"50px",color:"black",textAlign:"center"}}>
            Customization is at the core of the Sleeve experience — choose from any <br/>combination of design choices, behaviors and settings to make Sleeve at home on<br/> your desktop.
            </p><br/><br/>
            <br></br><br></br>
            <p style={{textAlign:"center"}}>
                <img src='https://replay.software/sleeve/images/IconArrayHotkeys.png' height={90} width={90} style={{position:"relative",marginLeft:"-750px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayWindow.png' height={110} width={110} style={{position:"absolute",marginLeft:"-30px",marginTop:"-10px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayInterfaceDark@2x.png' height={130} width={130} style={{position:"absolute",marginLeft:"40px",marginTop:"-20px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png' height={150} width={150} style={{position:"absolute",marginLeft:"130px",marginTop:"-30px"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayThemeDark@2x.png' height={170} width={170} style={{position:"absolute",marginLeft:"230px",marginTop:"-40px",zIndex:"5"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayTrackDark@2x.png' height={150} width={150} style={{position:"absolute",marginLeft:"350px",marginTop:"-30px",zIndex:"4"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayPositionDark@2x.png' height={130} width={130} style={{position:"absolute",marginLeft:"460px",marginTop:"-20px",zIndex:"3"}}></img>
                <img src='https://replay.software/sleeve/images/IconArrayArtworkDark@2x.png' height={110} width={110} style={{position:"absolute",marginLeft:"560px",marginTop:"-10px",zIndex:"2"}}></img> 
                <img src='https://replay.software/sleeve/images/IconArraySettings.png' height={90} width={90} style={{position:"absolute",marginLeft:"650px",marginTop:"-1px",zIndex:"1"}}></img>
            </p>
        </div>
<br></br>
<br></br><br></br>
<br></br><br></br>


        {/* artwork */}

        <div id="scroll-section">
          {/* for theory part */}
          <div
            className="aabb"
            ref={div1Ref}
            style={{
              border: "1px solid transparent",
              width: "500px",
              height: "500px",
            }}
          >
            {/* art */}
            <div>
              <img
                src={image15}
                height={80}
                width={80}
                style={{ marginLeft: "1px",marginTop:"150px" }}
              ></img>
              <br />
              <h4 style={{ marginLeft: "-300px" }}>Artwork</h4>
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "0px",
                  }}
                >
                  Scale artwork all the way up or all
                </span>
                <br />
                <span style={{ color: "black", fontSize: "26px" }}>
                  the way down. Round the corners
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  or leave them square.
                </span>
                <br />
              </p>
              <br />
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Choose shadow and lighting
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  effects to bring your album
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  artwork to life.
                </span>
                <br />
              </p>
              <br />
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Or hide it completely.
                </span>
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            {/* typography */}

            <div>
              <img
                src={image16}
                height={80}
                width={80}
                style={{ marginLeft: "-3px", marginTop:"99px" }}
              ></img>
              <br />
              <h4 style={{ marginLeft: "-210px" }}>Typography</h4>
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Pick the track info you want to
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  display, and then exactly how to
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  display it.
                </span>
                <br />
              </p>
              <br />
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Choose the fonts, weights, sizes,
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  and transparency to use for each
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  line, along with customizing color
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  {" "}
                  and shadow.
                </span>
                <br />
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            {/* interface */}

            <div>
              <img
                src="https://replay.software/sleeve/images/IconArrayLayoutDark@2x.png"
                height={80}
                width={80}
                style={{ marginLeft: "-3px",marginTop:"110px" }}
              ></img>
              {/* <br /> */}
              <img
                src="https://replay.software/sleeve/images/IconPositionDark@2x.png"
                height={80}
                width={80}
                style={{
                  position: "relative",
                  marginLeft: "-35px",
                  marginTop: "-10px",
                }}
              ></img>
              <img
                src="https://replay.software/sleeve/images/IconInterfaceDark@2x.png"
                height={80}
                width={80}
                style={{
                  position: "relative",
                  marginLeft: "-30px",
                  marginTop: "-10px",
                }}
              ></img>
              <br />
              <br></br>
              <h4 style={{ marginLeft: "-290px" }}>Interface</h4>
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Customize the layout, alignment
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  and position to fit your setup.
                </span>
                <br />
              </p>
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Show and hide playback controls.
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Add a backdrop layer and
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  customize it.
                </span>
                <br />
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* settings */}

            <div style={{ marginTop: "290px" }}>
              <div>
                <img id='img1' src='	https://replay.software/sleeve/images/IconArrayWindow.png' height={80} width={80} ></img><br/>
                <img
                  id="img2"
                  src="	https://replay.software/sleeve/images/IconHotkeys.png"
                  height={80}
                  width={80}
                ></img>
                <img
                  id="img3"
                  src="https://replay.software/sleeve/images/IconSettings.png"
                  height={80}
                  width={80}
                ></img>
              </div>
              
              <br />
              <h4 style={{ marginLeft: "-299px" }}>Settings</h4>
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Decide if Sleeve stays out of
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  the way, behind windows, or in
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  front of them — or only when
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  you need to see it.
                </span>
                <br />
              </p>
              <br />
              <p>
                <span style={{ color: "black", fontSize: "26px" }}>
                  Show it in the Dock, choose from
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  custom icons, or keep it on the
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Desktop only.
                </span>
                <br />
              </p>
              <br />
              <p>
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  Set your custom keyboard
                </span>
                <br />
                <span style={{ color: "black", fontSize: "26px" }}>
                  shortcuts and integrate with the
                </span>
                <br />
                <span
                  style={{
                    color: "black",
                    fontSize: "26px",
                    marginLeft: "-1px",
                  }}
                >
                  {" "}
                  apps you use.
                </span>
                <br />
                <br></br>
<br></br>
              </p>
            </div>
          </div>

          {/* for overflow over the image */}
          <div style={{ border: "1px solid transparent", width: "500px" }}>
            <div className="art" ref={div2Ref}>
              {/* art */}
              <div style={{ marginLeft: "22%" }}>
                <img
                  src="https://replay.software/sleeve/images/Artwork1.jpg"
                  style={{
                    marginTop: "150px",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Artwork2.jpg"
                  style={{
                    marginTop: "30px",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Artwork3.jpg"
                  style={{
                    marginTop: "30px",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
              </div>
              {/* typography */}
              <div style={{ marginLeft: "22%" }}>
                <img
                  src="https://replay.software/sleeve/images/Typography1.jpg"
                  style={{
                    marginTop: "280px",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Typography2.jpg"
                  style={{
                    marginTop: "30px",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
              </div>
              {/* interface */}
              <div style={{ marginLeft: "21%" }}>
                <img
                  src="https://replay.software/sleeve/images/Interface1.jpg"
                  style={{
                    marginTop: "80px",
                    zIndex: "2",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Interface2.jpg"
                  style={{
                    marginTop: "-30px",
                    zIndex: "1",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
              </div>
              {/* settings */}
              <div style={{ marginLeft: "22%" }}>
                <img
                  src="https://replay.software/sleeve/images/Settings1.jpg"
                  style={{
                    position: "relative",
                    marginTop: "100px",
                    marginLeft: "0px",
                    zIndex: "3",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Settings2.jpg"
                  style={{
                    position: "relative",
                    marginTop: "-40px",
                    marginLeft: "0px",
                    zIndex: "2",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
                <img
                  src="https://replay.software/sleeve/images/Settings3.jpg"
                  style={{
                    position: "relative",
                    marginTop: "-30px",
                    marginLeft: "0px",
                    zIndex: "1",
                    borderRadius: "10px",
                    border: "2px solid black",
                  }}
                ></img>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        

        {/* integrations */}

        <div style={{ marginLeft: "-1200px", marginTop: "179%" }}>
          <h5
            style={{ color: "orangered", textAlign: "center", fontSize: "300" }}
          >
            INTEGRATIONS
          </h5>
          <br></br>
          <h4>Like, Scrobble.</h4>
<br></br>
<br></br>
<br></br>
<br></br>
          <div style={{ display: "flex", marginLeft: "40px", gap: "20px" }}>
            <div
              style={{
                border: "1px solid transparent",
                width: "500px",
                height: "430px",
                backgroundColor: "#faebebff",
                borderRadius: "10px",
                padding:"20px"
              }}
            >
              <img
                src={image24}
                height={250}
                width={450}
              ></img>
              <p style={{ color: "#750D0D", marginLeft: "25%",fontSize:"25px"}}>
                Sleeve integrates with
                <br />
            Last.fm so you never miss a<br />
                track. Simply sign in and
                <br />
                start scrobbling.
              </p>
              <br></br>
              <h6 style={{ color: "#750D0D", marginLeft: "27%" ,fontSize:"14px", opacity:"0.5"}}>
                Last.fm account required
              </h6>
            </div>
            <div
              style={{
                border: "1px solid transparent",
                width: "500px",
                height: "430px",
                backgroundColor: "#f5faf5ff",
                borderRadius: "10px",
                padding:"20px"
              }}
            >
              <img
                src={image25}
                height={250}
                width={450}
              ></img>
              <p style={{ color: "#1C5D1B", marginLeft: "20%" ,fontSize:"25px"}}>
                With Sleeve 2 you can now like
                <br />
                tracks in Spotify, without ever
                <br />
                having to switch away from
                <br />
                Sleeve.
              </p>
              <br></br>
              <h6 style={{ color: "#1C5D1B", marginLeft: "25%", fontSize:"14px", opacity:"0.5" }}>
                A free Spotify Developer account is required
              </h6>
            </div>
          </div>
          <br />
          <br />
          <div
            style={{
              height: "80px",
              width: "1040px",
              border: "4px solid transparent",
              color: "black",
              padding: "27px",
              display: "flex",
              marginLeft: "40px",
              backgroundColor: "#f7f9faff",
              borderRadius: "10px",

            }}
          >
            <div>
              <img
                src="https://replay.software/sleeve/images/AppMusicDark@2x.png"
                height={70}
                width={70}
                style={{ marginLeft: "40px" }}
              ></img>
              <img
                src="https://replay.software/sleeve/images/AppSpotifyDark@2x.png"
                height={70}
                width={70}
                style={{ marginLeft: "30px" }}
              ></img>
              <img
                src="https://replay.software/sleeve/images/AppDopplerDark@2x.png"
                height={70}
                width={70}
                style={{ marginLeft: "30px" }}
              ></img>
            </div>
            <div>
              <p
                style={{
                  color: "black",
                  marginLeft: "40px",
                  fontSize: "22px",
                  marginTop: "-5px",
                }}
              >
                Sleeve integrates directly with Apple Music, Spotify and <br />
                Doppler. Control playback, like tracks and adjust volume
                <br />
                seamlessly.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div style={{ display: "flex", marginLeft: "40px", gap: "50px" }}>
            <div
              style={{
                display: "flex",
                gap: "30px",
                height: "200px",
                width: "520px",
                border: "5px solid transparent",
                backgroundColor: "#f7f9faff",
                borderRadius: "10px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://replay.software/sleeve/images/AppSpotifyDark@2x.png"
                  height={70}
                  width={70}
                ></img>
                <img
                  src="	https://replay.software/sleeve/images/IntegrationDoc.png"
                  height={60}
                  width={50}
                  style={{ marginLeft: "-20px" }}
                ></img>
              </div>
              <div>
                <p style={{ color: "black",fontSize:"20px" }}>
                  View the quick guide to
                  <br />
                  connecting Sleeve to your Spotify
                  <br />
                  account.
                </p>
                <br></br>
                <div className="btt">View Guide</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "30px",
                height: "200px",
                width: "500px",
                border: "5px solid transparent",
                backgroundColor: "#f7f9faff",
                borderRadius: "10px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  src="https://replay.software/sleeve/images/AppSleeveDark@2x.png"
                  height={80}
                  width={80}
                  style={{ marginLeft: "-50px" }}
                ></img>
                <span
                  style={{
                    position: "absolute",
                    color: "black",
                    marginTop: "30px",
                    marginLeft: "10px",
                  }}
                >
                  +
                </span>
                <div
                  style={{
                    height: "60px",
                    width: "60px",
                    border: "2px solid rgb(42, 41, 41)",
                    borderStyle: "dashed",
                    borderRadius: "20px",
                    marginLeft: "62px",
                    marginTop: "-75px",
                    color: "black",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  ?
                </div>
              </div>
              <div>
                <p style={{ color: "black" , fontSize:"20px"}}>
                  Want to use Sleeve
                  <br />
                  with your favorite
                  <br />
                  music app?.
                </p>
                <br></br>
                <div className="btt1">Request Integration</div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;