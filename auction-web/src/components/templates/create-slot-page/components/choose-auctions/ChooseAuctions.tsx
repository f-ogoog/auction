import {Box, Card, CardContent, CardMedia, Container, Grid, MenuItem, Select, Typography} from "@mui/material";
import Link from "next/link";
import Divider from "@mui/material/Divider";
import CreateButton from "@/components/common/ui/create-button";
import {Plus} from "@/components/common/ui/plus-button/types";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import AuctionsApi from "@/lib/api/auctions/AuctionsApi";
import * as styles from './ChooseAuctions.styles';
import TextArea from "@/components/common/ui/text-area";
import Input from "@/components/common/ui/form/input";
import Button from "@/components/common/ui/button";
import {ButtonColor} from "@/components/common/ui/button/types";
import DownloadButton from "@/components/common/ui/download-button";
import Image from "next/image";
import {LotBody} from "@/lib/api/auctions/types/LotBody";
import Modal from "@/components/common/ui/modals/modal";

interface Auction {
    id: string,
    name: string,
    description: string,
    avatar: string,
    maxSlots: number,
    category: string,
    state: string,
    lots: [],
}

const ChooseAuctions = () => {
    const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);
    const [isAuctionSelected, setIsAuctionSelected] = useState<boolean>(false);
    const [auctionsData, setAuctionsData] = useState<Auction[]>([]);
    const [downloadedImage, setDownloadedImage] = useState<string | ArrayBuffer | null>(null);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [avatar, setAvatar] = useState<File>();
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [auctionFormData, setAuctionFormData] = useState({
        name: "",
        description: "",
        minPrice: "",
        photos: [] as File[],
    });

    const [createAuctionFormData, setCreateAuctionFormData] = useState({
        name: "",
        description: "",
        minPrice: "",
        avatar: [] as File[],
        maxSlots: 0,
        category: ""
    });

    const [maxSlots, setMaxSlots] = useState<number>(0);
    const [category, setCategory] = useState<string>("");

    const handleMaxSlotsChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setMaxSlots(Number(value));
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: string }>) => {
        const value = event.target.value;
        setCreateAuctionFormData({ ...createAuctionFormData, category: value });
    };




    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setDownloadedImage(reader.result);
                console.log(file)
            };
            reader.readAsDataURL(file);
            setAuctionFormData(prevState => ({
                ...prevState,
                photos: [file]
            }));
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const auctions = await AuctionsApi.findAuctionsById();
                console.log(auctions);
                const firstThreeAuctions = auctions.slice(0, 3);
                setAuctionsData(firstThreeAuctions);
            } catch (error) {
                console.error('Error fetching choose-auctions:', error);
            }
        };

        fetchData();
    }, []);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setAuctionFormData({ ...auctionFormData, name: value });
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setAuctionFormData({ ...auctionFormData, description: value });
    };


    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuctionFormData({...auctionFormData, minPrice: event.target.value});
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (selectedAuction && auctionFormData.name && auctionFormData.description && auctionFormData.minPrice && auctionFormData.photos) {
            try {
                const lotBody: LotBody = {
                    name: auctionFormData.name,
                    description: auctionFormData.description,
                    minPrice: parseFloat(auctionFormData.minPrice),
                    photos: auctionFormData.photos
                };
                await AuctionsApi.createLot(selectedAuction.id, lotBody);
                setIsModalOpen2(true);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
    const handleCardClick = (auction: Auction) => {
        setSelectedAuction(auction);
        setIsAuctionSelected(true);
    };

    const handleCreateButtonClick1 = () => {
        setIsModalOpen1(true);
    };

    const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", createAuctionFormData.name);
        formDataToSend.append("description", createAuctionFormData.description);
        formDataToSend.append("maxSlots", createAuctionFormData.maxSlots.toString());
        formDataToSend.append('category', createAuctionFormData.category)
        if (avatar) {
            formDataToSend.append("avatar", avatar);
        }
        await AuctionsApi.createAuction(formDataToSend);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Container sx={styles.container}>
                    <Container>
                        <Typography sx={styles.typography} variant="h4">1. Download files</Typography>
                        <DownloadButton onClick={handleFileChange}/>
                    </Container>
                    <Container sx={styles.imageContainer}>
                        <Container sx={styles.imageContainer}>
                            {downloadedImage && (
                                <Image style={{borderRadius: "32px", marginRight: '16px'}}
                                       src={downloadedImage.toString()}
                                       alt={''} width={272} height={250}/>)}
                            {downloadedImage && (
                                <Image style={{borderRadius: "32px"}} src={downloadedImage.toString()}
                                       alt={''} width={163} height={150}/>
                            )}
                        </Container>
                        {downloadedImage && (
                            <Image style={{borderRadius: "32px"}} src={downloadedImage.toString()} alt={''} width={100}
                                   height={100}/>)}
                    </Container>
                </Container>
                <Container sx={styles.container}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={6}>
                                    <Typography sx={styles.typography} variant="h4">Choose auction</Typography>
                                </Grid>
                                <Grid item xs={6} textAlign="right">
                                    <Typography sx={styles.link} variant="h6">
                                        <Link href="/marketplace">
                                            All auctions
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider variant="fullWidth"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <CreateButton type={Plus.AUCTION} onClick={handleCreateButtonClick1}/>
                                    <Modal sx={styles.modal} open={isModalOpen1} handleClose={() => setIsModalOpen1(false)}>
                                    <form onSubmit={handleSubmitForm}>
                                        <Typography variant={"h2"}>Create Auction</Typography>
                                        <Grid item sx={{padding: '16px'}}>
                                            <Typography variant={"h4"} sx={styles.typography}>
                                                Name
                                            </Typography>
                                            <TextArea placeholder="Enter Name" required={true} value={createAuctionFormData.name}
                                                      onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCreateAuctionFormData({...createAuctionFormData, name: event.target.value})}/>
                                        </Grid>
                                        <Grid item sx={{padding: '16px'}}>
                                            <Typography variant={"h4"} sx={styles.typography}>
                                                Description
                                            </Typography>
                                            <TextArea placeholder="Enter Description" required={true}
                                                      value={createAuctionFormData.description} onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCreateAuctionFormData({...createAuctionFormData, description: event.target.value})}/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant={"h4"} sx={styles.typography}>
                                                Max Slots
                                            </Typography>
                                            <Input
                                                type={"number"}
                                                placeholder="Enter Max Slots"
                                                defaultValue={createAuctionFormData.maxSlots.toString()}
                                                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                                                    setCreateAuctionFormData({
                                                        ...createAuctionFormData,
                                                        maxSlots: parseInt(event.target.value) || 0
                                                    })
                                                } />

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant={"h4"} sx={styles.typography}>
                                                Category
                                            </Typography>
                                            <Select
                                                value={createAuctionFormData.category}
                                                onChange={handleCategoryChange}
                                                fullWidth
                                                placeholder="Select Category"
                                            >
                                                <MenuItem value="Art">Art</MenuItem>
                                                <MenuItem value="Music">Music</MenuItem>
                                                <MenuItem value="Sport">Sport</MenuItem>
                                                <MenuItem value="Games">Games</MenuItem>
                                                <MenuItem value="Photography">Photography</MenuItem>
                                            </Select>
                                        </Grid>
                                        <CreateButton type={Plus.DOWNLOAD} onClick={handleFileChange}/>
                                        <Box sx={styles.buttonDisabled}>
                                            <Button color={ButtonColor.BLACK} text="Create Auction" type={"submit"}
                                                    sx={{padding: "16px"}}/>
                                        </Box>
                                    </form>
                                </Modal>
                                </Grid>
                                <Grid item xs={6}>
                                    {auctionsData.length > 0 && (
                                        <Card
                                            sx={selectedAuction === null || isAuctionSelected ? styles.card : styles.selectedCard}
                                            onClick={() => handleCardClick(auctionsData[0])}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="424"
                                                image={auctionsData[0].avatar}
                                                alt={auctionsData[0].name}
                                            />
                                            <CardContent>
                                                <Typography sx={styles.typography}
                                                            variant="h4">{auctionsData[0].name}</Typography>
                                            </CardContent>
                                        </Card>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        {auctionsData.slice(1).map((auction, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Card
                                    sx={selectedAuction === auction ? styles.selectedCard : styles.card}
                                    onClick={() => handleCardClick(auction)}
                                >
                                    <CardMedia
                                        height="424"
                                        component="img"
                                        image={auction.avatar}
                                        alt={auction.name}
                                    />
                                    <CardContent>
                                        <Typography sx={styles.typography} variant="h4">{auction.name}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Container sx={styles.container}>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Divider variant="fullWidth"/>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h4"} sx={styles.typography}>
                                Name
                            </Typography>
                            <TextArea placeholder="Enter Name" required={true} value={auctionFormData.name} onChange={handleNameChange}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h4"} sx={styles.typography}>
                                Description
                            </Typography>
                            <TextArea placeholder="Enter Description" required={true} value={auctionFormData.description} onChange={handleDescriptionChange}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h4"} sx={styles.typography}>
                                Min price
                            </Typography>
                            <Input type={"number"} label={"Min Price"} id={"min-price"} defaultValue={auctionFormData.minPrice} onChange={handleMinPriceChange}/>
                        </Grid>
                        <Box sx={styles.button}>
                            <Button
                                text={"Create Slot"}
                                color={ButtonColor.BLACK}
                                type={"submit"}>
                            </Button>
                            <Box sx={styles.buttonDisabled}>
                                <Button
                                    text={"Go to my Items"}
                                    color={ButtonColor.WHITE}
                                    type={"submit"}
                                    disabled={true}>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
                <Modal sx={styles.modal} open={isModalOpen2} handleClose={() => setIsModalOpen2(false)}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                        <Box sx={{textAlign: "center", gap: "32px"}}>
                            <Typography sx={{padding: "32px"}} variant="h1">Success!</Typography>
                            <Typography variant="body1">You have just created slot.</Typography>
                            <Typography sx={{padding: "32px", textDecoration: 'underline', cursor: 'pointer' }} variant="body2" onClick={() => setIsModalOpen2(false)}>Stay on the page</Typography>
                        </Box>
                        <Image src={"/images/banners/success.png"} alt={"success"} width={450} height={450} />
                    </Box>
                </Modal>
            </form>
        </>
    );
}

export default ChooseAuctions;
