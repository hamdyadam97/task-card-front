import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(books, "ssssssssssssss");
    fetchBooks();
    console.log(books, "ssssssssssssss");
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://hamdyadam.pythonanywhere.com//api/books/");
    setBooks(response.data);
    console.log(books, response.data);
  };

  const forceDownload = (response, title) => {
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title + ".pdf");
    document.body.appendChild(link);
    link.click();
  };
  const downloadWithAxios = (url, title) => {
    axios({
      method: "get",
      url,
      responseType: "arraybuffer",
    })
      .then((response) => {
        forceDownload(response, title);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {books.map((book) => (
        <Card key={book.id}>
          <section class="wrapper">
            <div class="container-fostrap">
              <div>
                <img
                  src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png"
                  class="fostrap-logo"
                />
                <a href="http://hamdyadam.pythonanywhere.com/admin/"><h1 class="heading">ADD Product Dashboard</h1></a>
              </div>
              <div class="content">
                <div class="container">
                  <div class="row">
                    <div class="col-xs-12 col-sm-4">
                      <div class="card">
                        <a
                          class="img-card"
                          href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                        >
                          {/* <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" /> */}
                          <img alt="profile" src={book.img} />
                        </a>
                        <div class="card-content">
                          <h4 class="card-title">
                            <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                              {" "}
                              {book.name}
                            </a>
                          </h4>
                          <p class="">{book.details}</p>
                        </div>

                        <div class="card-read-more">
                          <button
                            class="btn btn-primary"
                            onClick={() => downloadWithAxios(book.pdf, book.id)}
                          >
                            Download book
                          </button>
                        </div>

                        <div class="card-read-more">
                          <a
                            href={book.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="primary">Open book</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
