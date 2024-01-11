// News.js

import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Card, CardGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import "../Components/News.css";

function News({ type }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "9e296134fe574373b0916b0ca6a006c6";
        const cacheKey = `${type}_news_cache`;
        const cachedData = localStorage.getItem(cacheKey);

        if (cachedData) {
          setNewsData(JSON.parse(cachedData));
        } else {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=${type}&sortBy=popularity&apiKey=${apiKey}&pageSize=${9}`
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          if (data.articles) {
            setNewsData(data.articles);
            localStorage.setItem(cacheKey, JSON.stringify(data.articles));
          } else {
            throw new Error("Data structure is not as expected.");
          }
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        // Display an error message to the user or log it to a logging service
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  return (
    <>
      <Container>
        <h2 className="NewsHead">{`${type} News`}</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row xs={1} md={3} className="g-4" >
            {newsData.length ? (
              newsData.map((newsItem, index) => (
                <Col key={index} md={4}>
                  <Card className="card-hover-effect" id="card">
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={newsItem.urlToImage}
                      alt={newsItem.title}
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {newsItem.title}
                      </Card.Title>
                      <Card.Text className="card-text">
                        {newsItem.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Published at{" "}
                        {new Date(newsItem.publishedAt).toLocaleString()}
                      </small>
                      <br />{" "}
                      <small className="text-muted">
                       Author :  <a className="url" href={newsItem.url} target="_blank"> {newsItem.author}</a>
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </Row>
        )}
      </Container>
    </>
  );
}

News.propTypes = {
  type: PropTypes.string.isRequired,
};

export default News;
