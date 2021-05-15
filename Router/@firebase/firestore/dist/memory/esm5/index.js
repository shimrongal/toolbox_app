import e from "@firebase/app";

import "@firebase/util";

import "@firebase/logger";

import "@firebase/webchannel-wrapper";

import "tslib";

import { L as r, g as t, $ as a, V as s, O as o, k as i, U as n, Q as p, j as f, H as m, Y as c, J as u, Z as l, t as b, n as g, s as h, q as v, y as w } from "./prebuilt-c3206f99-8af72121.js";

import { Component as I } from "@firebase/component";

var L = {
    Firestore: r,
    GeoPoint: s,
    Timestamp: o,
    Blob: i,
    Transaction: n,
    WriteBatch: p,
    DocumentReference: f,
    DocumentSnapshot: m,
    Query: c,
    QueryDocumentSnapshot: u,
    QuerySnapshot: l,
    CollectionReference: b,
    FieldPath: g,
    FieldValue: h,
    setLogLevel: v,
    CACHE_SIZE_UNLIMITED: w
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function P(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new I("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, L)));
    }(e, (function(e, s) {
        return new r(e, new t(e, s), new a);
    })), e.registerVersion("@firebase/firestore", "2.3.0");
}

P(e);

export { P as registerFirestore };
//# sourceMappingURL=index.js.map
