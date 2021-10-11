import React from 'react'

function Category() {
  const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
      <>
        <div className="container mx-auto flex flex-wrap">

          <div className="grid grid-col-1 w-full">
            <h2 className="text-4xl font-bold text-white text-center mb-10">Discover Categories</h2>
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Memes
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Games
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Skins
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Virtual Land
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 5
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link5"
                  role="tablist"
                >
                  AR
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 6
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link6"
                  role="tablist"
                >
                  VR
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 7
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(7);
                  }}
                  data-toggle="tab"
                  href="#link7"
                  role="tablist"
                >
                  Avatar
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 8
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(8);
                  }}
                  data-toggle="tab"
                  href="#link8"
                  role="tablist"
                >
                  Collectibles
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 9
                      ? "text-white bg-" + color + "-600"
                      : "text-" + color + "-600 bg-theme")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(9);
                  }}
                  data-toggle="tab"
                  href="#link9"
                  role="tablist"
                >
                  Trading Cards
                </a>
              </li>

            </ul>
            <div className="relative flex flex-col min-w-0 break-words mx-auto w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                    </div>
                  </div>
                  <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                    <div className="grid grid-cols-5 gap-4">
                      <img className="w-full" src="assets/images/vr-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/vr-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-two.jpg" alt="" />
                      <img className="w-full" src="assets/images/meta-three.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-one.jpg" alt="" />
                      <img className="w-full" src="assets/images/gaming-lfg-four.jpg" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      return <Tabs color="pink" />;
    </>
  )
}

export default Category
