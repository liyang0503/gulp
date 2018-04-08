(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('pingxiang', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360321","properties":{"name":"莲花县","cp":[113.955582,27.127807],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BFBH@HCJEJAHAB@H@FBFDFHFJFPBLDFDH@FCHCF@B@JBLHFPBRBLCNAHGJMJSJMHELCP@NAH@LAP@D@@@DCDAD@B@D@@C@A@C@AAC@AACACAE@A@A@CAAA@@@A@AAAA@A@ABA@ABCBA@A@A@@AAA@AAAA@@@ADGDEHEDCB@DDB@D@B@B@BADADABADADAA@BABA@AA@AA@A@A@ABABABABAAA@ABABABAD@BAB@D@BAB@BADAB@BBBADAB@BABAB@B@AAAAACAA@ABC@AAC@C@ABCB@BA@AD@D@D@B@@@BABCF@D@B@F@B@FAB@BABAB@D@BEHMLMJEH@NFRHLDFC@EEIEK@A@A@A@CBCBCBABCBCB@@CBC@C@C@ABCBC@C@C@CBC@C@C@ABADEFCBCBCBA@A@C@A@C@A@A@A@CCAAAACCACCECCAECCACACCCACACCEAAACACCA@AB@BCBABC@ABABCAA@AACCAAAACAAAAAAACAAAAAAAAA@CAA@ABCBCDC@A@A@AA@CCAACCAAAC@CAG@CAEAC@EAC@C@AAACACCAAA@AAAC@CAC@AAAAAC@A@A@CBCBE@EBEBE@CBA@C@A@AACAACCAAAC@AAAAAACCCAACCAACACAAAACCCECCACCAACCAACAA@AAC@CACAAACAA@CAA@C@A@CACACAC@A@CACCACACAAEAC@EAE@EBCBA@A@@B@DAB@@ABA@@@A@@CGAAA@@@@A@@@ABA@AACACAACCCAA@CAA@AA@A@AAAAAA@A@@AAAAA@E@AACAAAAAAAAA@E@C@C@C@AAAA@CACCC@ECC@CAC@E@EBCBCDEBC@AAAA@@ACACAE@CBA@A@A@A@AA@A@@ACMGCEAECCCAEEAIACCGCC@CCEAAEAE@IDUDOBCHCJGJIJGFGHAP@LAJEPEDG@IAI@C@CD@JAJCHIDI@IBI@EDCHCJALCRATAVCRCPIBGEEEEGIEI@GBIHEJ@LDL@F@L@HBHBD@DBHFJLLNPRPPPLPHTHRJPLNLNPPFLFNBNBPDTFTHNLJDHBJAHEFKDI@EH@F@DBDBFFJFNHPFLFTBJ@NBJ@HBNBPCDCBFNDPBHBJBFBB"],"encodeOffsets":[[116615,28071]]}},{"type":"Feature","id":"360322","properties":{"name":"上栗县","cp":[113.800525,27.877041],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@H@B@BABA@A@C@C@A@AB@@AB@B@HBB@B@D@DBBBDBDDD@F@D@D@BAB@B@@A@C@AAA@C@A@@@C@ABA@CBABADCDABADABAFAD@D@D@B@D@BBB@@@BB@B@B@BAB@BA@BB@BB@B@B@D@D@B@DAD@D@@@DAB@DCBA@CBCB@@CBA@CB@BCBABABABAAC@@COAGA@AAA@C@C@A@MKEKIAACCA@A@AF@@A@AAC@A@@CA@@CBA@CD@@A@EACAGCCAACAA@A@C@CAAAAC@@ACCCCAAEAA@A@CD@B@DBFBDBBAB@BABABA@AACAEAEEGCEEGECCCAAAAAAACAACCAAA@CAIEGOGGGBABA@@F@B@FAD@FADAD@BABABA@A@AAAA@CA@@AA@A@@BC@ADEBA@A@C@GCCC@EDCBCBC@AA@ABIDEBCDAL@L@BABABABAD@D@DFHDB@DAB@BABA@CBC@EBE@C@ABC@A@AAAACAAAA@ABCBABADAB@D@B@BD@B@@BD@B@@BBBBBAB@D@B@DBDBBBDBBB@@BADAHEDC@A@C@@@CAA@CCAACAAACAEAC@E@C@CBABCDADABAF@BAF@@@BC@A@CAC@CAC@ABCBABAD@D@DBDBD@BAFAFCD@BABCBC@AD@BADBB@DBD@BDDBD@DBBBBDBDF@B@DCDADCDCD@DBB@DAFABABCBEBEDCDAD@F@FBDBHBD@D@B@DIEEOGYGiUGCWIA@ECC@ICA@ABCBA@C@AA@@AA@C@CAAAA@@@AIBOGcaIKEGGAkCW@CBEFCBK@ECEEOOMEM@@@@@@@KFCFCDG@G@EGCG@GECEBE@GCKAC@CB@HDJ@FCHEFODWJGFCFAJDJJTZ\\ADCFGBKCMEGCGECAOGMGQIUOICGAC@C@CBAB@DFTDPVT@LADCDE@M@OAICA@A@KBIAIAKCEAEEDLDLALAHFHFHJFHJPPTVTNVTXPHRBRAPAPETGZEJIFIBGDEDABCAC@C@ABADAB@BABAD@BBBBD@BBD@DA@@B@DBBBD@DBFBDBB@B@D@DBDBBBDBDBBBBD@BD@BBBBD@B@B@DBBBFBBBBBFBDBBBDBBDBDBBBDBDDBBBDBDDDBDDDBBD@FBH@FAHBH@BBB@D@@B@BADA@@D@B@B@BBBBDBBBDBBDBBBDBBBD@D@BBB@DBDBDDBBDBB@D@D@B@@ABA@C@C@CBABABAB@F@B@FBB@D@B@D@D@B@B@D@DBBB@BBB@B@D@D@D@D@F@BBB@BDDBDDDBB@B@@@DBBFFB@BBB@D@BAB@@ADA@@BA@ADC@@BA@@@ADEBCD@D@D@B@BABAD@FADAF@D@B@FBD@DBD@JBBB@@BB@@@B"],"encodeOffsets":[[116650,28666]]}},{"type":"Feature","id":"360302","properties":{"name":"安源区","cp":[113.855044,27.625826],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@F@FAFEDIBK@KOKOCEDEFEDEAICEOCOGOMIS@EFGDGCEEAMBKFIBS@OBM@aGKEAMDS@MAEU@MEEIOEA@@@EBEDCDQVQXGLEDCBABGD@BFBDDBBDBFD@@@D@FEDIBIAIDGLEHBPCDE@KAQEG@EBGHEJALHdFT@HEFE@I@E@ADBFDZBNBJHHLVDHDBHFHDNFLDHADEBCY[ISCIBIDEHEXIPCFEDG@ECI@GDAD@LBHDF@FAFD@HDHFHH@H@DCDELE@@@@@@N@NFPPFFFDL@DAFEDAX@lDHBFHJLdbPHJA"],"encodeOffsets":[[116721,28367]]}},{"type":"Feature","id":"360323","properties":{"name":"芦溪县","cp":[114.041206,27.633633],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@A@C@CBCD@@C@O@KBG@MBO@KDGFINITINGHMBKDQAOAGEAK@I@ADEDG@ECGCEAKEOEIEGECEAG@A@GBIBIFGDG@EA@AC@ABGHGFKJCHGDAB@BAB@@BB@@HDDD@B@@CBA@@B@@BD@@@BABA@GAC@A@MHKRCdB@D@@DB@CF@B@@@BBB@@@@@BGCA@@B@B@D@BBBB@DADAB@BB@@CBCB@BAB@BB@@BB@HGD@B@@@B@@B@BAB@@A@A@A@ADBBBAB@ZEJ@RID@DBBB@BIJAH@FBHDHBDDDHD@D@B@BIBUCGEC@A@EJC@AHDVNRB@PFFJNFV@BF@NCTBNLFbHN@PAT@JALENAFBDFCHEH@FJTPNPHPDDFBJCFEFCFDFLPP@LALCJEFEBE@@B@@BBBB@D@DBB@@BBD@B@DABAB@JDD@FDB@XJHDjVZHPHFFCJBAFAD@FBJDFBFBFDFDFFDBD@HCDAFAB@D@DBFD@@FBBB@@@BA@ABEDAD@@@BHLB@BBB@B@D@BABA@A@@B@@@B@D@@@BBB@BA@A@C@ABCB@@AB@FBD@DBDABADCBCBADCBA@CB@B@B@D@B@B@BA@AB@@A@A@A@ABABC@A@CAAIEAA@A@A@@DADBDBBDB@BBBBB@D@D@DCB@F@HCBABA@A@A@@ACACAA@C@@BADADCFEDEDCBABABA@ABCBCBCBC@A@ACCAABC@ADADADCDADC@A@C@C@@BCDAFCDCFABEDEBA@A@CAEAAAEAAACCCAAACCCAAA@AAE@C@CAAC@AB@BAFAH@DAD@@ABCBABAB@BA@@@C@A@A@ABAD@DABCFEDCBABABABABABABABABCBADABCB@DABA@ABABADCBAD@D@BADABCBCBAB@D@FADAD@BA@A@CBA@CBAD@DCDCBA@A@AAAA@A@C@A@CAAACCAAAA@AAACAEAAAABC@CAAAEAEAECCAEACAEACAAAAAAC@C@C@CAC@EACACCECECCCAC@E@C@EBAAA@AAAC@GAEAEAE@EBABCBADCBA@C@EACACAAACCCCC@C@AAC@C@AACCCCAACEACCACAACAAA@CAG@EACEEEEEEAAC@E@E@EAA@CAAACCCCCCA@EAE@CBE@C@EAC@CAC@A@A@CDABCDCBC@ABA@C@E@C@EAAAE@EAC@AAEAA@AAECE@C@ABEDCBCBABA@CAAAA@C@A@CAA@A@CBEBA@CBAAE@A@A@CBA@C@CAA@CCEECC"],"encodeOffsets":[[116769,28085]]}},{"type":"Feature","id":"360313","properties":{"name":"湘东区","cp":[113.7456,27.639319],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CGKUGGAIAMCYAEBCF@J@F@FE@GESGcBKFIHGFAH@RFLBF@DCAOFGHKJCJBJAFC@E@C@@ECCAAACCEA@AHCBADAFCHKRWRUDCFCFA@@MQCUBGD@FIB@D@HFVDJA@A@A@CGCCCACCGAG@EBGJI@AAACAC@QJI@YFA@ABAABCB@B@B@@@BA@A@AA@@@A@C@GHA@@AA@@ABA@ADADA@@AAA@CBCBA@AA@A@C@A@AB@HD@A@@@@AA@A@@@ADEA@@CC@A@DcLQNGB@D@HBB@BA@A@@AC@@@AB@DA@@@ACCGC@@AA@@BA@ABAHCDGLIHEHGBAD@AAAEAIAGCOEMGCGCKEOCOEKCIEECECG@GBEBIDMAQCMAIESAIBKAOEKEGGCCECKBEDG@IAEECGKGECICICYAO@MDKJGJIHYFK@KEGCGCIBGBEHCJGLGLALAL@JBHFFJHPJBB@@DBHBD@D@BBBBBD@BABIBCBA@BBB@BD@D@DABCBEBG@E@EAE@A@CBCBABAB@B@DADABA@@B@B@JBTBNGPEJCHBBB@DBF@DB@@DFBBBBL@DBFBAD@D@B@B@BHHBDDHBBDBB@DDB@@DA@EFAB@@BFBDBDFD@DAH@BA@A@A@AB@@ABBJ@BA@A@AAACACCEEGEAEBC@EBC@CDABIBKDGFGNAL@PNXNRLXHRBPFTATDXJPFHJJFDLFRJPLNLPRFLFPHRJJJHNLLJJJ@@FFFBLDJBJBLAB@B@JDPBN@F@DCBC@KUSCOES@CBADAD@D@HBJDVPRJNHPH"],"encodeOffsets":[[116517,28377]]}}],"UTF8Encoding":true});}));