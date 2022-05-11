DROP DATABASE IF EXISTS `skateboards`;
CREATE DATABASE `skateboards`;
USE `skateboards`;

CREATE TABLE board_type
    (
        board_type_id TINYINT AUTO_INCREMENT,
        board_type VARCHAR(20),
        CONSTRAINT pk_board_type PRIMARY KEY (board_type_id)
    );

CREATE TABLE wheel_size
    (
        wheel_size_id TINYINT AUTO_INCREMENT,
        wheel_size VARCHAR(5),
        CONSTRAINT pk_wheel_size PRIMARY KEY (wheel_size_id)
    );

CREATE TABLE wheel_hardness
    (
        wheel_hardness_id TINYINT AUTO_INCREMENT,
        wheel_hardness VARCHAR(5),
        CONSTRAINT pk_wheel_size PRIMARY KEY (wheel_hardness_id)
    );

CREATE TABLE brand 
    (
        brand_id TINYINT AUTO_INCREMENT,
        brand VARCHAR(40),
        CONSTRAINT pk_brand PRIMARY KEY (brand_id)
    );

CREATE TABLE item_included
    (
        item_included_id TINYINT AUTO_INCREMENT,
        item_included VARCHAR(35),
        CONSTRAINT pk_item_included PRIMARY KEY (item_included_id)
    );


CREATE TABLE items
(
    id INT UNSIGNED AUTO_INCREMENT,
    item_name VARCHAR(40) NOT NULL,
    brand TINYINT,
    board_type TINYINT, 
    description VARCHAR(400) NOT NULL,
    item_cost SMALLINT NOT NULL,
    year_release YEAR,
    designer VARCHAR(60),
    wheel_size TINYINT,
    wheel_hardness TINYINT,
    load_capacity SMALLINT,
    CONSTRAINT pk_id PRIMARY KEY (id),
    CONSTRAINT fk_board_type_id FOREIGN KEY (board_type) REFERENCES board_type (board_type_id),
    CONSTRAINT fk_brand_id FOREIGN KEY (brand) REFERENCES brand (brand_id),
    CONSTRAINT fk_wheel_size_id FOREIGN KEY (wheel_size) REFERENCES wheel_size (wheel_size_id),
    CONSTRAINT fk_wheel_hardness_id FOREIGN KEY (wheel_hardness) REFERENCES wheel_hardness (wheel_hardness_id)
);

CREATE TABLE items_to_items_included(
    items_id INT UNSIGNED,
    item_included_id TINYINT,
    CONSTRAINT fk_items_items_included_id FOREIGN KEY (items_id) REFERENCES items (id),
    CONSTRAINT fk_item_included_id FOREIGN KEY (item_included_id) REFERENCES item_included(item_included_id)
);