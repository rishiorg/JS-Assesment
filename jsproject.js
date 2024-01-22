/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTarr = []; //array of nft is defined here
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eye_color, shirt_type, glasses, bling) {
    //object of nft's
     const NFTobj = {
           "name": name,
           "eyeColor": eye_color,
           "shirtType": shirt_type,
           "glasses": glasses,
           "bling": bling
     }
     NFTarr.push(NFTobj);
     console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i = 0; i < NFTarr.length; i++){
    console.log("\nID:  \t\t" + (i+2024));
    console.log("Name:\t\t" + NFTarr[i].name);
    console.log("Eyecolor:\t" + NFTarr[i].eyeColor);
    console.log("Shirt Type: " + NFTarr[i].shirtType);
    console.log("GlassesType: " + NFTarr[i].glasses);
    console.log("Bling: \t\t" + NFTarr[i].bling);

}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n" + NFTarr.length);
}

// call your functions below this line
mintNFT("Alex", "Brown", "Sweatshirt", "Aviator", "Silver penadant");
mintNFT("Max", "Green", "Tees", "Square", "Platinum Ring");
mintNFT("Kumar", "Green", "Hoodie", "Square", "Golden Chain");
mintNFT("Aria", "Green", "Jacket", "Round", "Ring");
listNFTs();
getTotalSupply();
