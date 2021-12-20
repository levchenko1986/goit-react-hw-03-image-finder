import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import MyLoader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import getImages from "./services/getImages";

class App extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    error: null,
    searchQuery: "",
    imgUrl: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImages = () => {
    this.setState({ loading: true });
    const { page, searchQuery } = this.state;
    getImages(page, searchQuery)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          page: prevState.page + 1,
        }));
      })

      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  searchImages = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  openModal = (e) => {
    this.setState({
      imgUrl: e.target.dataset.src,
    });
  };

  closeModal = () => {
    this.setState({
      imgUrl: null,
    });
  };

  render() {
    const { loading, images, error, imgUrl } = this.state;
    const showButton = images.length >= 12 && !loading;

    return (
      <div className="App">
        <Searchbar onSubmit={this.searchImages} />
        {error && <p>{error.message}</p>}
        {images.length > 0 && (
          <ImageGallery toOpen={this.openModal} list={images} />
        )}
        {loading && <MyLoader />}
        {showButton && <Button toAdd={this.fetchImages} />}
        {imgUrl ? <Modal toClose={this.closeModal} source={imgUrl} /> : ""}
      </div>
    );
  }
}

export default App;
