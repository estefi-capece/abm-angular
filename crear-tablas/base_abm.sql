--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5alpha2
-- Dumped by pg_dump version 9.5alpha2

-- Started on 2015-12-02 09:27:22

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 7 (class 2615 OID 16986)
-- Name: reqper; Type: SCHEMA; Schema: -; Owner: tedede_php
--

CREATE SCHEMA reqper;


ALTER SCHEMA reqper OWNER TO tedede_php;

--
-- TOC entry 184 (class 3079 OID 12356)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2120 (class 0 OID 0)
-- Dependencies: 184
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = reqper, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 181 (class 1259 OID 16987)
-- Name: personas; Type: TABLE; Schema: reqper; Owner: tedede_php
--

CREATE TABLE personas (
    dni integer NOT NULL,
    nombre character varying(80),
    telefono character varying(50),
    direccion character varying(100),
    barrio character varying(50),
    cuit_l character varying(50),
    mail character varying(50)
);


ALTER TABLE personas OWNER TO tedede_php;

--
-- TOC entry 182 (class 1259 OID 16992)
-- Name: requerimientos; Type: TABLE; Schema: reqper; Owner: tedede_php
--

CREATE TABLE requerimientos (
    req_proy character varying(50) NOT NULL,
    req_req character varying(10) NOT NULL,
    req_titulo character varying(100),
    req_tiporeq character varying(50) NOT NULL,
    req_detalles text,
    req_grupo character varying(50),
    req_componente character varying(50),
    req_prioridad integer,
    req_costo integer,
    req_tlg bigint NOT NULL,
    req_desarrollo text
);


ALTER TABLE requerimientos OWNER TO tedede_php;

--
-- TOC entry 183 (class 1259 OID 17008)
-- Name: usuarios; Type: TABLE; Schema: reqper; Owner: tedede_php
--

CREATE TABLE usuarios (
    usu_usu character varying(50) NOT NULL,
    usu_clave character varying(100) NOT NULL
);


ALTER TABLE usuarios OWNER TO tedede_php;

--
-- TOC entry 2109 (class 0 OID 16987)
-- Dependencies: 181
-- Data for Name: personas; Type: TABLE DATA; Schema: reqper; Owner: tedede_php
--

COPY personas (dni, nombre, telefono, direccion, barrio, cuit_l, mail) FROM stdin;
99999999	x	x	x	x	x	x
99999992	x	x	x	x	x	x
99999993	x	x	x	x	x	x
99999994	x	x	x	x	x	x
99999991	x	x	x	x	x	x
99999995	x	x	x	x	x	x
99999996	x	x	x	x	x	x
99999997	x	x	x	x	x	x
99999998	x	x	x	x	x	x
99999990	x	x	x	x	x	x
\.


--
-- TOC entry 2110 (class 0 OID 16992)
-- Dependencies: 182
-- Data for Name: requerimientos; Type: TABLE DATA; Schema: reqper; Owner: tedede_php
--

COPY requerimientos (req_proy, req_req, req_titulo, req_tiporeq, req_detalles, req_grupo, req_componente, req_prioridad, req_costo, req_tlg, req_desarrollo) FROM stdin;
a	a	x	x	x	x	x	1	1	1	x
b	a	x	x	x	x	x	1	1	1	x
c	a	x	x	x	x	x	1	1	1	x
d	a	x	x	x	x	x	1	1	1	x
e	a	x	x	x	x	x	1	1	1	x
f	a	x	x	x	x	x	1	1	1	x
g	a	x	x	x	x	x	1	1	1	x
h	a	x	x	x	x	x	1	1	1	x
i	a	x	x	x	x	x	1	1	1	x
j	a	x	x	x	x	x	1	1	1	x
\.


--
-- TOC entry 2111 (class 0 OID 17008)
-- Dependencies: 183
-- Data for Name: usuarios; Type: TABLE DATA; Schema: reqper; Owner: tedede_php
--

COPY usuarios (usu_usu, usu_clave) FROM stdin;
tester	81dc9bdb52d04dc20036dbd8313ed055
\.


--
-- TOC entry 1990 (class 2606 OID 16991)
-- Name: personas_pkey; Type: CONSTRAINT; Schema: reqper; Owner: tedede_php
--

ALTER TABLE ONLY personas
    ADD CONSTRAINT personas_pkey PRIMARY KEY (dni);


--
-- TOC entry 1992 (class 2606 OID 16999)
-- Name: requerimientos_pkey; Type: CONSTRAINT; Schema: reqper; Owner: tedede_php
--

ALTER TABLE ONLY requerimientos
    ADD CONSTRAINT requerimientos_pkey PRIMARY KEY (req_proy, req_req);


--
-- TOC entry 1994 (class 2606 OID 17012)
-- Name: usuarios_pkey; Type: CONSTRAINT; Schema: reqper; Owner: tedede_php
--

ALTER TABLE ONLY usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (usu_usu);


--
-- TOC entry 2118 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 2119 (class 0 OID 0)
-- Dependencies: 7
-- Name: reqper; Type: ACL; Schema: -; Owner: tedede_php
--

REVOKE ALL ON SCHEMA reqper FROM PUBLIC;
REVOKE ALL ON SCHEMA reqper FROM tedede_php;
GRANT ALL ON SCHEMA reqper TO tedede_php;
GRANT USAGE ON SCHEMA reqper TO tallerabm_user;


--
-- TOC entry 2121 (class 0 OID 0)
-- Dependencies: 181
-- Name: personas; Type: ACL; Schema: reqper; Owner: tedede_php
--

REVOKE ALL ON TABLE personas FROM PUBLIC;
REVOKE ALL ON TABLE personas FROM tedede_php;
GRANT ALL ON TABLE personas TO tedede_php;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE personas TO tallerabm_user;


--
-- TOC entry 2122 (class 0 OID 0)
-- Dependencies: 182
-- Name: requerimientos; Type: ACL; Schema: reqper; Owner: tedede_php
--

REVOKE ALL ON TABLE requerimientos FROM PUBLIC;
REVOKE ALL ON TABLE requerimientos FROM tedede_php;
GRANT ALL ON TABLE requerimientos TO tedede_php;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE requerimientos TO tallerabm_user;


--
-- TOC entry 2123 (class 0 OID 0)
-- Dependencies: 183
-- Name: usuarios; Type: ACL; Schema: reqper; Owner: tedede_php
--

REVOKE ALL ON TABLE usuarios FROM PUBLIC;
REVOKE ALL ON TABLE usuarios FROM tedede_php;
GRANT ALL ON TABLE usuarios TO tedede_php;
GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE usuarios TO tallerabm_user;


-- Completed on 2015-12-02 09:27:22

--
-- PostgreSQL database dump complete
--

