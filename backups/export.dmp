--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.5
-- Dumped by pg_dump version 9.5.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: answers; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE answers (
    id integer NOT NULL,
    description text,
    product_id integer,
    seller_id integer,
    question_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE answers OWNER TO omastar;

--
-- Name: answers_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE answers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE answers_id_seq OWNER TO omastar;

--
-- Name: answers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE answers_id_seq OWNED BY answers.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE ar_internal_metadata OWNER TO omastar;

--
-- Name: auction_terms; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE auction_terms (
    id integer NOT NULL,
    auction_id integer,
    term_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE auction_terms OWNER TO omastar;

--
-- Name: auction_terms_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE auction_terms_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auction_terms_id_seq OWNER TO omastar;

--
-- Name: auction_terms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE auction_terms_id_seq OWNED BY auction_terms.id;


--
-- Name: auctions; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE auctions (
    id integer NOT NULL,
    auction_type integer,
    title character varying,
    description text,
    start_datetime timestamp without time zone,
    equipment_location character varying,
    seller_id integer,
    active boolean DEFAULT false,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE auctions OWNER TO omastar;

--
-- Name: auctions_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE auctions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auctions_id_seq OWNER TO omastar;

--
-- Name: auctions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE auctions_id_seq OWNED BY auctions.id;


--
-- Name: bids; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE bids (
    id integer NOT NULL,
    buyer_id integer,
    product_id integer,
    amount_cents integer DEFAULT 0 NOT NULL,
    amount_currency character varying DEFAULT 'USD'::character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE bids OWNER TO omastar;

--
-- Name: bids_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE bids_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE bids_id_seq OWNER TO omastar;

--
-- Name: bids_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE bids_id_seq OWNED BY bids.id;


--
-- Name: buyers; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE buyers (
    id integer NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    username character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    prefix character varying,
    name character varying,
    last_name character varying,
    charge character varying,
    cell_phone character varying,
    telephone character varying,
    place_id integer,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying,
    last_sign_in_ip character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE buyers OWNER TO omastar;

--
-- Name: buyers_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE buyers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE buyers_id_seq OWNER TO omastar;

--
-- Name: buyers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE buyers_id_seq OWNED BY buyers.id;


--
-- Name: companies; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE companies (
    id integer NOT NULL,
    name character varying,
    website character varying,
    rfc character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE companies OWNER TO omastar;

--
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE companies_id_seq OWNER TO omastar;

--
-- Name: companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE companies_id_seq OWNED BY companies.id;


--
-- Name: fiscal_addresses; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE fiscal_addresses (
    id integer NOT NULL,
    street_address character varying,
    number character varying,
    city character varying,
    state character varying,
    country character varying,
    postal_code integer,
    user_id integer,
    place_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE fiscal_addresses OWNER TO omastar;

--
-- Name: fiscal_addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE fiscal_addresses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE fiscal_addresses_id_seq OWNER TO omastar;

--
-- Name: fiscal_addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE fiscal_addresses_id_seq OWNED BY fiscal_addresses.id;


--
-- Name: increments; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE increments (
    id integer NOT NULL,
    buyer_id integer,
    product_id integer,
    amount money,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE increments OWNER TO omastar;

--
-- Name: increments_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE increments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE increments_id_seq OWNER TO omastar;

--
-- Name: increments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE increments_id_seq OWNED BY increments.id;


--
-- Name: places; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE places (
    id integer NOT NULL,
    name character varying,
    telephone character varying,
    company_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE places OWNER TO omastar;

--
-- Name: places_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE places_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE places_id_seq OWNER TO omastar;

--
-- Name: places_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE places_id_seq OWNED BY places.id;


--
-- Name: product_images; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE product_images (
    id integer NOT NULL,
    image character varying,
    product_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE product_images OWNER TO omastar;

--
-- Name: product_images_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE product_images_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE product_images_id_seq OWNER TO omastar;

--
-- Name: product_images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE product_images_id_seq OWNED BY product_images.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE products (
    id integer NOT NULL,
    inventory_number character varying,
    plant_location character varying,
    lot_number character varying,
    product_type character varying,
    brand character varying,
    model character varying,
    series character varying,
    production_year integer,
    conditions character varying,
    reserve_price_cents integer DEFAULT 0 NOT NULL,
    reserve_price_currency character varying DEFAULT 'USD'::character varying NOT NULL,
    starting_price_cents integer DEFAULT 0 NOT NULL,
    starting_price_currency character varying DEFAULT 'USD'::character varying NOT NULL,
    increment_value_cents integer DEFAULT 0 NOT NULL,
    increment_value_currency character varying DEFAULT 'USD'::character varying NOT NULL,
    initial_cost_cents integer DEFAULT 0 NOT NULL,
    initial_cost_currency character varying DEFAULT 'USD'::character varying NOT NULL,
    additional_information character varying,
    status character varying,
    auction_id integer,
    sold boolean DEFAULT false,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    time_left time without time zone,
    timer character varying,
    stop boolean DEFAULT false,
    start_time timestamp without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    finish_time timestamp without time zone
);


ALTER TABLE products OWNER TO omastar;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_id_seq OWNER TO omastar;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE products_id_seq OWNED BY products.id;


--
-- Name: purchases; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE purchases (
    id integer NOT NULL,
    product_id integer,
    seller_id integer,
    buyer_id integer,
    bid_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE purchases OWNER TO omastar;

--
-- Name: purchases_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE purchases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE purchases_id_seq OWNER TO omastar;

--
-- Name: purchases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE purchases_id_seq OWNED BY purchases.id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE questions (
    id integer NOT NULL,
    description text,
    product_id integer,
    buyer_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE questions OWNER TO omastar;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE questions_id_seq OWNER TO omastar;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE questions_id_seq OWNED BY questions.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE schema_migrations OWNER TO omastar;

--
-- Name: sellers; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE sellers (
    id integer NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    username character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp without time zone,
    remember_created_at timestamp without time zone,
    prefix character varying,
    name character varying,
    last_name character varying,
    charge character varying,
    cell_phone character varying,
    telephone character varying,
    place_id integer,
    sign_in_count integer DEFAULT 0 NOT NULL,
    current_sign_in_at timestamp without time zone,
    last_sign_in_at timestamp without time zone,
    current_sign_in_ip character varying,
    last_sign_in_ip character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE sellers OWNER TO omastar;

--
-- Name: sellers_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE sellers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE sellers_id_seq OWNER TO omastar;

--
-- Name: sellers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE sellers_id_seq OWNED BY sellers.id;


--
-- Name: terms; Type: TABLE; Schema: public; Owner: omastar
--

CREATE TABLE terms (
    id integer NOT NULL,
    description text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE terms OWNER TO omastar;

--
-- Name: terms_id_seq; Type: SEQUENCE; Schema: public; Owner: omastar
--

CREATE SEQUENCE terms_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE terms_id_seq OWNER TO omastar;

--
-- Name: terms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: omastar
--

ALTER SEQUENCE terms_id_seq OWNED BY terms.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY answers ALTER COLUMN id SET DEFAULT nextval('answers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY auction_terms ALTER COLUMN id SET DEFAULT nextval('auction_terms_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY auctions ALTER COLUMN id SET DEFAULT nextval('auctions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY bids ALTER COLUMN id SET DEFAULT nextval('bids_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY buyers ALTER COLUMN id SET DEFAULT nextval('buyers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY companies ALTER COLUMN id SET DEFAULT nextval('companies_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY fiscal_addresses ALTER COLUMN id SET DEFAULT nextval('fiscal_addresses_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY increments ALTER COLUMN id SET DEFAULT nextval('increments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY places ALTER COLUMN id SET DEFAULT nextval('places_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY product_images ALTER COLUMN id SET DEFAULT nextval('product_images_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY products ALTER COLUMN id SET DEFAULT nextval('products_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY purchases ALTER COLUMN id SET DEFAULT nextval('purchases_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY questions ALTER COLUMN id SET DEFAULT nextval('questions_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY sellers ALTER COLUMN id SET DEFAULT nextval('sellers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY terms ALTER COLUMN id SET DEFAULT nextval('terms_id_seq'::regclass);


--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY answers (id, description, product_id, seller_id, question_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('answers_id_seq', 1, false);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2017-01-07 03:35:00.918202	2017-01-07 03:35:00.918202
\.


--
-- Data for Name: auction_terms; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY auction_terms (id, auction_id, term_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: auction_terms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('auction_terms_id_seq', 1, false);


--
-- Data for Name: auctions; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY auctions (id, auction_type, title, description, start_datetime, equipment_location, seller_id, active, created_at, updated_at) FROM stdin;
1	0	Ratione neque vel qui.	Similique qui aut et quos. Labore qui velit. Et nesciunt facere adipisci.	2017-01-07 11:48:44	Inventore voluptatem asperiores ullam iusto eos laudantium.	\N	f	2017-01-07 03:36:19.32699	2017-01-07 03:36:19.32699
\.


--
-- Name: auctions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('auctions_id_seq', 1, true);


--
-- Data for Name: bids; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY bids (id, buyer_id, product_id, amount_cents, amount_currency, created_at, updated_at) FROM stdin;
1	\N	2	0	USD	2017-01-20 05:46:02.309722	2017-01-20 05:46:02.309722
2	1	2	100	USD	2017-01-20 05:46:02.314865	2017-01-20 05:46:02.314865
3	\N	1	0	USD	2017-01-20 05:46:13.222636	2017-01-20 05:46:13.222636
4	1	1	100	USD	2017-01-20 05:46:13.226577	2017-01-20 05:46:13.226577
5	1	3	100	USD	2017-01-20 05:53:32.477868	2017-01-20 05:53:32.477868
6	1	3	100	USD	2017-01-20 05:53:40.383348	2017-01-20 05:53:40.383348
7	1	3	100	USD	2017-01-20 05:55:40.792919	2017-01-20 05:55:40.792919
8	1	4	100	USD	2017-01-20 05:56:13.104531	2017-01-20 05:56:13.104531
9	1	3	100	USD	2017-01-20 05:59:11.106336	2017-01-20 05:59:11.106336
10	1	4	100	USD	2017-01-20 06:02:21.692069	2017-01-20 06:02:21.692069
11	1	3	100	USD	2017-01-20 06:03:28.973083	2017-01-20 06:03:28.973083
12	1	3	100	USD	2017-01-20 06:20:22.798094	2017-01-20 06:20:22.798094
13	1	4	100	USD	2017-01-20 06:20:28.953119	2017-01-20 06:20:28.953119
14	1	4	100	USD	2017-01-20 06:20:30.183781	2017-01-20 06:20:30.183781
15	1	4	100	USD	2017-01-20 06:20:31.550664	2017-01-20 06:20:31.550664
16	1	4	100	USD	2017-01-20 06:20:32.763279	2017-01-20 06:20:32.763279
17	1	4	100	USD	2017-01-20 06:20:33.919369	2017-01-20 06:20:33.919369
18	1	4	100	USD	2017-01-20 06:20:34.840916	2017-01-20 06:20:34.840916
19	1	4	100	USD	2017-01-20 06:20:35.816356	2017-01-20 06:20:35.816356
20	1	4	100	USD	2017-01-20 06:20:37.027766	2017-01-20 06:20:37.027766
21	1	4	100	USD	2017-01-20 06:20:38.050096	2017-01-20 06:20:38.050096
22	1	4	100	USD	2017-01-20 06:20:39.151514	2017-01-20 06:20:39.151514
23	1	4	100	USD	2017-01-20 06:20:40.228727	2017-01-20 06:20:40.228727
24	1	4	100	USD	2017-01-20 06:20:41.302463	2017-01-20 06:20:41.302463
25	1	4	100	USD	2017-01-20 06:23:23.034339	2017-01-20 06:23:23.034339
26	1	4	100	USD	2017-01-20 06:23:24.138964	2017-01-20 06:23:24.138964
27	1	3	100	USD	2017-01-20 06:29:12.549384	2017-01-20 06:29:12.549384
28	1	3	100	USD	2017-01-20 06:31:52.440432	2017-01-20 06:31:52.440432
29	1	3	100	USD	2017-01-20 06:31:53.79863	2017-01-20 06:31:53.79863
30	1	3	100	USD	2017-01-20 06:31:55.10801	2017-01-20 06:31:55.10801
31	1	3	100	USD	2017-01-20 06:31:56.282902	2017-01-20 06:31:56.282902
32	1	4	100	USD	2017-01-20 06:33:11.384194	2017-01-20 06:33:11.384194
33	1	4	100	USD	2017-01-20 06:33:28.413571	2017-01-20 06:33:28.413571
34	1	3	100	USD	2017-01-20 06:34:08.632076	2017-01-20 06:34:08.632076
35	1	3	100	USD	2017-01-20 06:42:18.526128	2017-01-20 06:42:18.526128
36	1	3	100	USD	2017-01-20 06:55:28.634758	2017-01-20 06:55:28.634758
37	1	4	100	USD	2017-01-20 07:51:49.092259	2017-01-20 07:51:49.092259
38	1	4	100	USD	2017-01-20 07:51:51.743399	2017-01-20 07:51:51.743399
39	1	3	100	USD	2017-01-20 07:58:09.798246	2017-01-20 07:58:09.798246
40	1	3	100	USD	2017-01-20 07:58:38.135358	2017-01-20 07:58:38.135358
41	1	4	100	USD	2017-01-20 07:59:10.5126	2017-01-20 07:59:10.5126
42	1	3	100	USD	2017-01-20 07:59:33.08447	2017-01-20 07:59:33.08447
43	1	4	100	USD	2017-01-20 08:00:11.683237	2017-01-20 08:00:11.683237
44	1	4	100	USD	2017-01-20 08:02:52.919684	2017-01-20 08:02:52.919684
45	1	3	100	USD	2017-01-20 08:03:29.739657	2017-01-20 08:03:29.739657
46	1	4	100	USD	2017-01-20 08:04:01.484012	2017-01-20 08:04:01.484012
47	1	3	100	USD	2017-01-20 08:04:18.593441	2017-01-20 08:04:18.593441
48	1	3	100	USD	2017-01-20 08:04:22.44463	2017-01-20 08:04:22.44463
49	1	3	100	USD	2017-01-20 08:04:25.263081	2017-01-20 08:04:25.263081
50	1	3	100	USD	2017-01-20 15:40:27.203067	2017-01-20 15:40:27.203067
51	1	3	100	USD	2017-01-20 15:40:28.266583	2017-01-20 15:40:28.266583
83	1	3	100	USD	2017-01-23 00:54:48.401786	2017-01-23 00:54:48.401786
84	1	4	100	USD	2017-01-23 01:00:34.760227	2017-01-23 01:00:34.760227
85	1	3	10000	USD	2017-01-23 01:06:20.072059	2017-01-23 01:06:20.072059
86	1	1	10000	USD	2017-01-23 01:06:42.396642	2017-01-23 01:06:42.396642
87	1	4	10000	USD	2017-01-23 01:06:51.586495	2017-01-23 01:06:51.586495
88	1	1	10000	USD	2017-01-23 01:13:01.891571	2017-01-23 01:13:01.891571
89	1	2	10000	USD	2017-01-23 01:13:27.962425	2017-01-23 01:13:27.962425
90	1	2	10000	USD	2017-01-23 01:13:49.576163	2017-01-23 01:13:49.576163
91	1	4	10000	USD	2017-01-23 01:14:48.617589	2017-01-23 01:14:48.617589
92	1	4	10000	USD	2017-01-23 01:14:56.946652	2017-01-23 01:14:56.946652
93	1	3	10000	USD	2017-01-23 01:15:19.898813	2017-01-23 01:15:19.898813
94	1	4	30000	USD	2017-01-23 01:16:20.051458	2017-01-23 01:16:20.051458
95	1	4	10000	USD	2017-01-23 01:18:45.611896	2017-01-23 01:18:45.611896
96	1	3	20000	USD	2017-01-23 01:19:17.636591	2017-01-23 01:19:17.636591
97	1	1	40000	USD	2017-01-23 01:22:56.013121	2017-01-23 01:22:56.013121
98	1	2	70000	USD	2017-01-23 01:23:28.589721	2017-01-23 01:23:28.589721
99	1	2	80000	USD	2017-01-23 01:25:11.422923	2017-01-23 01:25:11.422923
100	1	1	90000	USD	2017-01-23 01:25:52.42126	2017-01-23 01:25:52.42126
101	1	1	30000	USD	2017-01-23 01:28:12.329812	2017-01-23 01:28:12.329812
102	1	1	30000	USD	2017-01-23 01:28:28.318297	2017-01-23 01:28:28.318297
103	1	1	30000	USD	2017-01-23 01:31:25.679959	2017-01-23 01:31:25.679959
104	1	3	40000	USD	2017-01-23 01:40:57.242583	2017-01-23 01:40:57.242583
105	1	4	50000	USD	2017-01-23 01:46:01.41471	2017-01-23 01:46:01.41471
106	1	3	70000	USD	2017-01-23 01:53:59.196223	2017-01-23 01:53:59.196223
107	1	4	80000	USD	2017-01-23 01:54:57.085056	2017-01-23 01:54:57.085056
108	1	3	10000	USD	2017-01-24 06:03:24.401263	2017-01-24 06:03:24.401263
109	1	3	10000	USD	2017-01-24 06:03:28.566102	2017-01-24 06:03:28.566102
110	1	3	10000	USD	2017-01-24 06:03:40.407273	2017-01-24 06:03:40.407273
111	1	3	10000	USD	2017-01-24 06:03:45.918482	2017-01-24 06:03:45.918482
112	1	3	10000	USD	2017-01-24 06:03:46.81934	2017-01-24 06:03:46.81934
113	1	4	50000	USD	2017-01-24 06:04:03.482387	2017-01-24 06:04:03.482387
114	1	3	10000	USD	2017-01-24 06:04:49.393258	2017-01-24 06:04:49.393258
115	1	3	60000	USD	2017-01-25 05:37:39.613131	2017-01-25 05:37:39.613131
116	1	3	60000	USD	2017-01-25 05:38:02.356374	2017-01-25 05:38:02.356374
117	1	1	50000	USD	2017-01-25 05:39:24.90521	2017-01-25 05:39:24.90521
118	1	2	50000	USD	2017-01-25 05:39:47.775134	2017-01-25 05:39:47.775134
119	1	2	100000	USD	2017-01-25 05:39:55.057374	2017-01-25 05:39:55.057374
120	1	4	75000	USD	2017-01-25 05:43:55.19644	2017-01-25 05:43:55.19644
121	1	4	78000	USD	2017-01-25 05:46:02.777135	2017-01-25 05:46:02.777135
122	1	4	67000	USD	2017-01-25 05:48:16.477374	2017-01-25 05:48:16.477374
123	1	4	65000	USD	2017-01-25 05:48:48.722092	2017-01-25 05:48:48.722092
124	1	4	65000	USD	2017-01-25 05:48:53.697377	2017-01-25 05:48:53.697377
125	1	4	10000	USD	2017-01-25 05:50:54.206835	2017-01-25 05:50:54.206835
126	1	4	10000	USD	2017-01-25 05:52:25.400939	2017-01-25 05:52:25.400939
127	1	4	10000	USD	2017-01-25 05:55:57.169495	2017-01-25 05:55:57.169495
128	1	3	40000	USD	2017-01-25 06:01:33.880082	2017-01-25 06:01:33.880082
129	1	3	40000	USD	2017-01-25 06:01:37.660594	2017-01-25 06:01:37.660594
130	1	3	40000	USD	2017-01-25 06:01:38.775421	2017-01-25 06:01:38.775421
131	1	3	40000	USD	2017-01-25 06:01:39.924684	2017-01-25 06:01:39.924684
132	1	3	40000	USD	2017-01-25 06:01:41.0914	2017-01-25 06:01:41.0914
133	1	3	40000	USD	2017-01-25 06:01:42.315796	2017-01-25 06:01:42.315796
134	1	3	40000	USD	2017-01-25 06:01:43.405598	2017-01-25 06:01:43.405598
135	1	3	40000	USD	2017-01-25 06:01:45.359441	2017-01-25 06:01:45.359441
136	1	3	40000	USD	2017-01-25 06:01:46.545588	2017-01-25 06:01:46.545588
137	1	3	40000	USD	2017-01-25 06:01:47.695406	2017-01-25 06:01:47.695406
138	1	3	40000	USD	2017-01-25 06:01:48.868457	2017-01-25 06:01:48.868457
139	1	3	40000	USD	2017-01-25 06:01:50.023317	2017-01-25 06:01:50.023317
140	1	3	60000	USD	2017-01-25 06:01:58.195464	2017-01-25 06:01:58.195464
141	1	3	60000	USD	2017-01-25 06:02:02.2514	2017-01-25 06:02:02.2514
142	1	3	60000	USD	2017-01-25 06:02:03.321601	2017-01-25 06:02:03.321601
143	1	3	60000	USD	2017-01-25 06:02:04.253535	2017-01-25 06:02:04.253535
144	1	3	60000	USD	2017-01-25 06:02:05.337977	2017-01-25 06:02:05.337977
145	1	3	60000	USD	2017-01-25 06:02:06.474137	2017-01-25 06:02:06.474137
146	1	3	60000	USD	2017-01-25 06:02:07.576888	2017-01-25 06:02:07.576888
147	1	3	60000	USD	2017-01-25 06:02:08.559914	2017-01-25 06:02:08.559914
148	1	3	60000	USD	2017-01-25 06:02:09.582905	2017-01-25 06:02:09.582905
149	1	3	60000	USD	2017-01-25 06:02:11.716432	2017-01-25 06:02:11.716432
150	1	3	60000	USD	2017-01-25 06:02:13.003478	2017-01-25 06:02:13.003478
151	1	3	60000	USD	2017-01-25 06:02:14.304708	2017-01-25 06:02:14.304708
152	1	3	60000	USD	2017-01-25 06:02:15.434706	2017-01-25 06:02:15.434706
153	1	3	60000	USD	2017-01-25 06:02:16.583863	2017-01-25 06:02:16.583863
154	1	4	10000	USD	2017-01-25 06:15:29.610089	2017-01-25 06:15:29.610089
155	1	4	40000	USD	2017-01-25 06:15:40.039581	2017-01-25 06:15:40.039581
156	1	4	40000	USD	2017-01-25 06:15:41.885008	2017-01-25 06:15:41.885008
157	1	4	40000	USD	2017-01-25 06:15:42.983019	2017-01-25 06:15:42.983019
158	1	4	40000	USD	2017-01-25 06:15:44.10971	2017-01-25 06:15:44.10971
159	1	4	40000	USD	2017-01-25 06:15:45.155327	2017-01-25 06:15:45.155327
160	1	4	40000	USD	2017-01-25 06:15:46.163575	2017-01-25 06:15:46.163575
161	1	4	40000	USD	2017-01-25 06:15:47.213241	2017-01-25 06:15:47.213241
162	1	4	40000	USD	2017-01-25 06:15:48.413582	2017-01-25 06:15:48.413582
163	1	4	40000	USD	2017-01-25 06:15:49.650568	2017-01-25 06:15:49.650568
164	1	4	40000	USD	2017-01-25 06:15:50.668343	2017-01-25 06:15:50.668343
165	1	4	40000	USD	2017-01-25 06:15:51.68978	2017-01-25 06:15:51.68978
166	1	4	40000	USD	2017-01-25 06:15:52.637386	2017-01-25 06:15:52.637386
167	1	4	40000	USD	2017-01-25 06:15:53.717406	2017-01-25 06:15:53.717406
168	1	4	40000	USD	2017-01-25 06:15:54.63789	2017-01-25 06:15:54.63789
169	1	4	40000	USD	2017-01-25 06:15:55.514316	2017-01-25 06:15:55.514316
170	1	4	40000	USD	2017-01-25 06:15:56.46707	2017-01-25 06:15:56.46707
171	1	4	40000	USD	2017-01-25 06:15:57.441755	2017-01-25 06:15:57.441755
172	1	4	40000	USD	2017-01-25 06:15:58.587671	2017-01-25 06:15:58.587671
173	1	4	40000	USD	2017-01-25 06:15:59.507858	2017-01-25 06:15:59.507858
174	1	4	40000	USD	2017-01-25 06:16:01.644194	2017-01-25 06:16:01.644194
175	1	4	40000	USD	2017-01-25 06:16:02.90285	2017-01-25 06:16:02.90285
176	1	4	40000	USD	2017-01-25 06:16:04.372182	2017-01-25 06:16:04.372182
177	1	4	40000	USD	2017-01-25 06:16:05.746575	2017-01-25 06:16:05.746575
178	1	4	40000	USD	2017-01-25 06:16:06.940992	2017-01-25 06:16:06.940992
179	1	3	80000	USD	2017-01-29 01:36:49.33476	2017-01-29 01:36:49.33476
180	1	3	70000	USD	2017-01-29 01:37:26.16288	2017-01-29 01:37:26.16288
181	1	3	7000000	USD	2017-01-29 01:37:54.65429	2017-01-29 01:37:54.65429
182	1	3	7000000	USD	2017-01-29 01:37:58.694739	2017-01-29 01:37:58.694739
183	1	3	7000000	USD	2017-01-29 01:37:59.664041	2017-01-29 01:37:59.664041
184	1	3	7000000	USD	2017-01-29 01:38:00.57906	2017-01-29 01:38:00.57906
185	1	3	7000000	USD	2017-01-29 01:38:01.482935	2017-01-29 01:38:01.482935
186	1	3	7000000	USD	2017-01-29 01:38:02.500807	2017-01-29 01:38:02.500807
187	1	3	7000000	USD	2017-01-29 01:38:05.692362	2017-01-29 01:38:05.692362
188	1	3	7000000	USD	2017-01-29 01:38:06.784372	2017-01-29 01:38:06.784372
189	1	3	7000000	USD	2017-01-29 01:38:07.800352	2017-01-29 01:38:07.800352
190	1	3	7000000	USD	2017-01-29 01:38:08.971763	2017-01-29 01:38:08.971763
191	1	3	7000000	USD	2017-01-29 01:38:10.263136	2017-01-29 01:38:10.263136
192	1	3	7000000	USD	2017-01-29 01:38:11.484999	2017-01-29 01:38:11.484999
193	1	3	70000	USD	2017-01-29 01:38:33.487471	2017-01-29 01:38:33.487471
194	1	4	90000	USD	2017-01-29 01:38:41.073883	2017-01-29 01:38:41.073883
195	1	4	90000	USD	2017-01-29 01:40:55.087514	2017-01-29 01:40:55.087514
196	1	4	60000	USD	2017-01-29 01:41:28.706889	2017-01-29 01:41:28.706889
197	1	4	20000	USD	2017-01-29 01:42:10.328734	2017-01-29 01:42:10.328734
198	1	4	30000	USD	2017-01-29 01:42:35.224434	2017-01-29 01:42:35.224434
199	1	4	30000	USD	2017-01-29 01:42:44.11799	2017-01-29 01:42:44.11799
200	1	4	30000	USD	2017-01-29 01:42:45.013074	2017-01-29 01:42:45.013074
201	1	4	30000	USD	2017-01-29 01:42:45.986176	2017-01-29 01:42:45.986176
202	1	4	30000	USD	2017-01-29 01:42:47.133629	2017-01-29 01:42:47.133629
203	1	4	30000	USD	2017-01-29 01:42:48.997455	2017-01-29 01:42:48.997455
204	1	4	30000	USD	2017-01-29 01:42:50.173636	2017-01-29 01:42:50.173636
205	1	4	30000	USD	2017-01-29 01:42:51.347597	2017-01-29 01:42:51.347597
206	1	4	30000	USD	2017-01-29 01:42:52.466895	2017-01-29 01:42:52.466895
207	1	4	30000	USD	2017-01-29 01:48:05.030834	2017-01-29 01:48:05.030834
208	1	4	20000	USD	2017-01-29 01:49:25.296718	2017-01-29 01:49:25.296718
209	1	3	55000	USD	2017-01-29 01:50:50.086613	2017-01-29 01:50:50.086613
210	1	1	70000	USD	2017-01-29 01:51:04.459913	2017-01-29 01:51:04.459913
211	1	3	55000	USD	2017-01-29 01:51:37.454962	2017-01-29 01:51:37.454962
212	1	3	1212100	USD	2017-01-29 02:00:51.490772	2017-01-29 02:00:51.490772
213	1	4	78800	USD	2017-01-29 02:05:09.970261	2017-01-29 02:05:09.970261
214	1	4	78800	USD	2017-01-29 02:05:16.431633	2017-01-29 02:05:16.431633
215	1	4	6600	USD	2017-01-29 02:09:00.961695	2017-01-29 02:09:00.961695
\.


--
-- Name: bids_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('bids_id_seq', 215, true);


--
-- Data for Name: buyers; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY buyers (id, email, username, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, prefix, name, last_name, charge, cell_phone, telephone, place_id, sign_in_count, current_sign_in_at, last_sign_in_at, current_sign_in_ip, last_sign_in_ip, created_at, updated_at) FROM stdin;
1	test_buyer@mail.com	test_buyer	$2a$11$DPUJZ/Xl0gL/toJKmdKnte5c4oe2u2KPBsDri441n36jeHGfInlEO	\N	\N	2017-01-07 04:30:20.730256	\N	\N	\N	\N	\N	\N	\N	21	2017-01-29 04:01:13.720662	2017-01-28 06:14:54.034219	172.18.0.1	172.18.0.1	2017-01-07 03:35:03.26049	2017-01-29 04:01:13.723084
\.


--
-- Name: buyers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('buyers_id_seq', 1, true);


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY companies (id, name, website, rfc, created_at, updated_at) FROM stdin;
\.


--
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('companies_id_seq', 1, false);


--
-- Data for Name: fiscal_addresses; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY fiscal_addresses (id, street_address, number, city, state, country, postal_code, user_id, place_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: fiscal_addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('fiscal_addresses_id_seq', 1, false);


--
-- Data for Name: increments; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY increments (id, buyer_id, product_id, amount, created_at, updated_at) FROM stdin;
\.


--
-- Name: increments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('increments_id_seq', 1, false);


--
-- Data for Name: places; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY places (id, name, telephone, company_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: places_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('places_id_seq', 1, false);


--
-- Data for Name: product_images; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY product_images (id, image, product_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: product_images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('product_images_id_seq', 1, false);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY products (id, inventory_number, plant_location, lot_number, product_type, brand, model, series, production_year, conditions, reserve_price_cents, reserve_price_currency, starting_price_cents, starting_price_currency, increment_value_cents, increment_value_currency, initial_cost_cents, initial_cost_currency, additional_information, status, auction_id, sold, created_at, updated_at, time_left, timer, stop, start_time, finish_time) FROM stdin;
3	6507313052916	Doloremque atque omnis rerum.	1866196254	Et aut fugit dicta autem.	Doloremque porro numquam suscipit placeat quo.	Facere iure numquam magni dolores dolorem.	Sunt repellendus fuga aliquam facilis.	1986	Amet sapiente ipsam eum.	97	USD	14	USD	89	USD	7	USD	Repudiandae vero et laboriosam voluptatem.	Consequuntur reiciendis a modi.	1	f	2017-01-07 03:36:19.574744	2017-01-29 05:56:59.466691	\N	\N	f	1970-01-01 00:00:00	2017-01-29 06:01:59.463523
4	8928640604834	Repudiandae odio asperiores voluptas quisquam quis et sit ut.	5531760021	Accusantium nesciunt enim nam.	Aut et porro quia modi placeat explicabo.	Reprehenderit voluptatum a ea ut iure.	Voluptatibus voluptatem ut soluta suscipit voluptatem placeat saepe vero.	1986	Quis odio sed reiciendis officiis.	13	USD	5	USD	74	USD	32	USD	Magni quo eius ullam et occaecati nesciunt voluptate alias.	Ut et deleniti nisi illo non eos dolorem blanditiis.	1	f	2017-01-07 03:36:19.59473	2017-01-29 05:56:59.510233	\N	\N	f	1970-01-01 00:00:00	2017-01-29 06:01:59.507674
1	2786855264641	Laborum amet asperiores quibusdam quasi consequatur officiis est et.	2145557910	Sint est consequuntur aliquam.	Voluptas aut occaecati sed et mollitia.	Velit non et nobis consequatur sequi et odio.	Earum in esse nihil rem rerum et quia cumque.	1986	Non quos consectetur sit.	72	USD	72	USD	64	USD	83	USD	Aut minima qui omnis et qui.	Ab nihil voluptatibus quasi placeat ut asperiores.	1	f	2017-01-07 03:36:19.530783	2017-01-29 05:56:59.53294	\N	\N	f	1970-01-01 00:00:00	2017-01-29 06:01:59.53102
2	6018129105609	Laborum sed officia eveniet autem enim nobis blanditiis.	5102923466	Occaecati cupiditate error optio.	Facere officia provident ut fugit a ut.	Voluptates mollitia dignissimos ullam.	Cupiditate impedit earum et et.	1986	Voluptas et est amet voluptatem rerum id occaecati.	85	USD	91	USD	33	USD	89	USD	Temporibus voluptas labore animi minus dolorem.	Officia numquam et illum cumque qui debitis.	1	f	2017-01-07 03:36:19.552782	2017-01-29 05:56:59.558359	\N	\N	f	1970-01-01 00:00:00	2017-01-29 06:01:59.555847
\.


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('products_id_seq', 4, true);


--
-- Data for Name: purchases; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY purchases (id, product_id, seller_id, buyer_id, bid_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: purchases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('purchases_id_seq', 1, false);


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY questions (id, description, product_id, buyer_id, created_at, updated_at) FROM stdin;
\.


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('questions_id_seq', 1, false);


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY schema_migrations (version) FROM stdin;
20161211063519
20161211063828
20161211064537
20161211192140
20161211192241
20161211200752
20161212053519
20161212053558
20161212053618
20161212053635
20161212053732
20161212054119
20161212054218
20161212054406
20161212054422
20161212054518
20161229214358
20170107031019
20170107031333
\.


--
-- Data for Name: sellers; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY sellers (id, email, username, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, prefix, name, last_name, charge, cell_phone, telephone, place_id, sign_in_count, current_sign_in_at, last_sign_in_at, current_sign_in_ip, last_sign_in_ip, created_at, updated_at) FROM stdin;
1	test_buyer@mail.com	test_seller	$2a$11$ckVG7nJ48X4HQnmenMzVtuVZ.Y143mFJZxbk.D9GjRuNPlHRQkHHm	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	0	\N	\N	\N	\N	2017-01-07 03:35:03.447285	2017-01-07 03:35:03.447285
\.


--
-- Name: sellers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('sellers_id_seq', 1, true);


--
-- Data for Name: terms; Type: TABLE DATA; Schema: public; Owner: omastar
--

COPY terms (id, description, created_at, updated_at) FROM stdin;
\.


--
-- Name: terms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: omastar
--

SELECT pg_catalog.setval('terms_id_seq', 1, false);


--
-- Name: answers_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY answers
    ADD CONSTRAINT answers_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: auction_terms_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY auction_terms
    ADD CONSTRAINT auction_terms_pkey PRIMARY KEY (id);


--
-- Name: auctions_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY auctions
    ADD CONSTRAINT auctions_pkey PRIMARY KEY (id);


--
-- Name: bids_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY bids
    ADD CONSTRAINT bids_pkey PRIMARY KEY (id);


--
-- Name: buyers_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY buyers
    ADD CONSTRAINT buyers_pkey PRIMARY KEY (id);


--
-- Name: companies_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);


--
-- Name: fiscal_addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY fiscal_addresses
    ADD CONSTRAINT fiscal_addresses_pkey PRIMARY KEY (id);


--
-- Name: increments_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY increments
    ADD CONSTRAINT increments_pkey PRIMARY KEY (id);


--
-- Name: places_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY places
    ADD CONSTRAINT places_pkey PRIMARY KEY (id);


--
-- Name: product_images_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY product_images
    ADD CONSTRAINT product_images_pkey PRIMARY KEY (id);


--
-- Name: products_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: purchases_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY purchases
    ADD CONSTRAINT purchases_pkey PRIMARY KEY (id);


--
-- Name: questions_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: sellers_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY sellers
    ADD CONSTRAINT sellers_pkey PRIMARY KEY (id);


--
-- Name: terms_pkey; Type: CONSTRAINT; Schema: public; Owner: omastar
--

ALTER TABLE ONLY terms
    ADD CONSTRAINT terms_pkey PRIMARY KEY (id);


--
-- Name: index_auction_terms_on_auction_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_auction_terms_on_auction_id ON auction_terms USING btree (auction_id);


--
-- Name: index_auction_terms_on_term_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_auction_terms_on_term_id ON auction_terms USING btree (term_id);


--
-- Name: index_buyers_on_email; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_buyers_on_email ON buyers USING btree (email);


--
-- Name: index_buyers_on_place_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_buyers_on_place_id ON buyers USING btree (place_id);


--
-- Name: index_buyers_on_reset_password_token; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_buyers_on_reset_password_token ON buyers USING btree (reset_password_token);


--
-- Name: index_buyers_on_username; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_buyers_on_username ON buyers USING btree (username);


--
-- Name: index_companies_on_rfc; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_companies_on_rfc ON companies USING btree (rfc);


--
-- Name: index_fiscal_addresses_on_place_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_fiscal_addresses_on_place_id ON fiscal_addresses USING btree (place_id);


--
-- Name: index_fiscal_addresses_on_user_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_fiscal_addresses_on_user_id ON fiscal_addresses USING btree (user_id);


--
-- Name: index_places_on_company_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_places_on_company_id ON places USING btree (company_id);


--
-- Name: index_products_on_auction_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_products_on_auction_id ON products USING btree (auction_id);


--
-- Name: index_sellers_on_email; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_sellers_on_email ON sellers USING btree (email);


--
-- Name: index_sellers_on_place_id; Type: INDEX; Schema: public; Owner: omastar
--

CREATE INDEX index_sellers_on_place_id ON sellers USING btree (place_id);


--
-- Name: index_sellers_on_reset_password_token; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_sellers_on_reset_password_token ON sellers USING btree (reset_password_token);


--
-- Name: index_sellers_on_username; Type: INDEX; Schema: public; Owner: omastar
--

CREATE UNIQUE INDEX index_sellers_on_username ON sellers USING btree (username);


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

