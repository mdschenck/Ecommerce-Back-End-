USE ecommerce_db;

DROP TABLE IF EXISTS product_tag;

CREATE TABLE product_tag (
    product_id INT,
    tag_id INT,
    PRIMARY KEY (product_id, tag_id),
    FOREIGN KEY (product_id)
    REFERENCES product (product_id)
    ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tag_id)
    REFERENCES tag (tag_id)
    ON DELETE CASCADE
);

INSERT INTO product_tag (product_id, tag_id) 
VALUES 
(1,6),(1,7),(1,8),(2,6),(3,1),(3,3),(3,4),(3,5),(4,1),(4,2),(4,8),(5,3);