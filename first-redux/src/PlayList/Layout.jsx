import { Outlet } from "react-router-dom";
import { CartIcon } from "./Icons";
import { useRecoilValue } from "recoil";
import { isModal, playList } from "../atom";
import Modal from "./Modal";

export default function Layout() {
  const list = useRecoilValue(playList);
  const modalState = useRecoilValue(isModal);
  return (
    <div>
      {modalState ? <Modal /> : null}
      <div className="bg-listTwo text-white px-7 py-3 text-3xl font-bold flex items-center justify-around">
        <div>UMC Playlist</div>
        <div className="flex items-center">
          <CartIcon />
          {list.length >= 1 ? (
            <div className="bg-list text-[13px] text-listTwo rounded-full w-6 h-6 text-center flex justify-center items-center z-0 relative right-4 bottom-2">
              <span>{list.length}</span>
            </div>
          ) : null}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
