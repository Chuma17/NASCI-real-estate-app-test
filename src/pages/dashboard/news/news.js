import React from "react";
import "./news.css";
import NewsPageComponent from "src/components/news-page-component/news-page-component";
import { v4 as uuidv4 } from "uuid";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import Modal from "react-modal";
import SubscribeModal from "src/components/modals/subscribe/subscribe";
import FilterModal from "src/components/modals/filter/filter";
// import { useNews } from "src/context/newsProvider";
import { useNews } from "src/context/newsProvider";
import Loading from "src/pages/loading_animation.json";
import Lottie from "lottie-react";

const customFilterStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "70%",
    right: "auto",
    bottom: "auto",
    outline: "1px solid black",
    border: "none",
    borderRadius: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "50%",
    right: "auto",
    bottom: "auto",
    outline: "1px solid black",
    border: "none",
    borderRadius: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
  },
};
Modal.setAppElement("#root");

const News = () => {
  // const { news } = useNews();

  document.title = "News";

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("It goes hard");
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [filterModalIsOpen, setFilterIsOpen] = React.useState(false);

  function openFilterModal() {
    setFilterIsOpen(true);
  }
  function closeFilterModal() {
    setFilterIsOpen(false);
  }
  const { news } = useNews();

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <SubscribeModal />
      </Modal>
      <Modal
        isOpen={filterModalIsOpen}
        onRequestClose={closeFilterModal}
        style={customFilterStyles}
      >
        <FilterModal />
      </Modal>
      <section className="news_page">
        <SearchComp title="Search" placeholder="Search news" />
        <br />
        <h2>News</h2>
        {news ? (
          <div className="news_page_list">
            <button onClick={openModal} type="button">
              Subscribe
            </button>
            <button onClick={openFilterModal} type="button">
              FilterModal
            </button>
            {news.map((el) => {
              return (
                <NewsPageComponent
                  detail={`/dashboard/news/${el.id}`}
                  key={uuidv4()}
                  newsData={el}
                />
              );
            })}
          </div>
        ) : (
          <>
            <Lottie
              className="news_loading_lottie"
              animationData={Loading}
              loop={true}
            />
          </>
        )}
      </section>
      ;
    </>
  );
};

export default News;
