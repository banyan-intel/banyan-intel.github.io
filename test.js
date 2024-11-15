"use strict";

import * as process from "node:process";     
import * as version from "./version.js";                   

const name = process.argv[2] ?? "";                                              
                                                                                 
console.log(version,"Hello world!",name); 
