
import torch
from model import GameAI
import minio
import redis
import psycopg2

def train_model():
    model = GameAI()
    optimizer = torch.optim.Adam(model.parameters())
    
    # Training loop here
    print("Training model...")

if __name__ == "__main__":
    train_model()
