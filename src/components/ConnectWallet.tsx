"use client"
import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { ethers } from "ethers";
import { WalletContext } from "@/providers/context";
import {useEffect} from "react";

export function ConnectWallet () {
    const {wallet,setWallet} = useContext(WalletContext);
    const {isConnected} = wallet;

    // useEffect(() => {
    //     if(!isConnected){
    //         const myProvider = new ethers.JsonRpcProvider(
    //             "https://sepolia.infura.io/v3/4f653d2d351148769fd1017be6f45d45"
    //           );
    //           setWallet({provider:myProvider,signer:{},isConnected:false});
    //           console.log("connected to node");
    //           console.log(wallet,myProvider) ;
    //     }
    // },[])

    const handleConnect = async () => {
        if((window as any).ethereum == undefined){
            alert("Metamask is not installed!");
        } else {
            const provider = new ethers.BrowserProvider((window as any).ethereum);
            const signer = await provider.getSigner();
            setWallet({provider:provider,signer:signer,isConnected:true});
        }
    }
    
    return (
        <div>
        <Button onClick={handleConnect}>{isConnected?"Conneced":"Connect Wallet"}</Button>
        </div>
    )
}